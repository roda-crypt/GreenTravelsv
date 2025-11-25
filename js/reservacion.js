document.addEventListener('DOMContentLoaded', function() {
    // --- ELEMENTOS DEL DOM ---
    const reservationForm = document.getElementById('reservationForm');
    const viewReservationsLink = document.getElementById('viewReservationsLink');

    // --- EVENT LISTENERS ---
    if (reservationForm) reservationForm.addEventListener('submit', handleReservationSubmit);
    // Usamos window.showMyReservations para asegurar que se accede a la función global
    if (viewReservationsLink) viewReservationsLink.addEventListener('click', window.showMyReservations);

    // --- FUNCIONES PÚBLICAS (adjuntadas a window) ---
    window.initiateReservation = function(packageTitle, packagePrice) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            window.showToast('Debes iniciar sesión para hacer una reserva.');
            window.showAuthModal(); // Llama a la función global de autenticación
            return;
        }
        

        // Poblar el modal de reserva
        document.getElementById('reservationPackageTitle').textContent = packageTitle;
        document.getElementById('reservationPackagePrice').textContent = `Precio: ${packagePrice} por persona`;
        document.getElementById('packageTitleInput').value = packageTitle;
        document.getElementById('packagePriceInput').value = packagePrice;
        
        window.openReservationModal();
    };

    window.openReservationModal = function() {
        const modal = document.getElementById('reservationModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeReservationModal = function() {
        const modal = document.getElementById('reservationModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if(reservationForm) reservationForm.reset();
        }
    };
    
    window.showMyReservations = function(event) {
        if (event) event.preventDefault();
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            window.showToast('Debes iniciar sesión para ver tus reservas.');
            return;
        }

        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        const userReservations = reservations.filter(r => r.username === loggedInUser);
        const reservationsList = document.getElementById('reservationsList');

        if (!reservationsList) return;

        reservationsList.innerHTML = ''; // Limpiar contenido anterior

        if (userReservations.length === 0) {
            reservationsList.innerHTML = '<p class="no-reservations-message">No tienes reservas aún.</p>';
        } else {
            userReservations.forEach(reservation => {
                const card = document.createElement('div');
                card.className = 'reservation-card';
                
                // Creamos un ID único para la imagen basado en el título del paquete
                const imageSeed = reservation.packageTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

                card.innerHTML = `
                    <div class="reservation-details">
                        <div class="reservation-header">
                            <img src="https://picsum.photos/seed/${imageSeed}/60/60.jpg" alt="${reservation.packageTitle}">
                            <h4>${reservation.packageTitle}</h4>
                        </div>
                        <p><i class="fas fa-calendar"></i> Fecha de Viaje: ${new Date(reservation.travelDate).toLocaleDateString('es-ES')}</p>
                        <p><i class="fas fa-users"></i> Personas: ${reservation.numberOfPeople}</p>
                        <p><i class="fas fa-tag"></i> Precio Total: $${reservation.totalPrice}</p>
                    </div>
                    <div class="reservation-status ${reservation.status === 'Confirmada' ? 'confirmed' : ''}">${reservation.status}</div>
                `;
                reservationsList.appendChild(card);
            });
        }

        window.openMyReservationsModal();
    };

    window.openMyReservationsModal = function() {
        const modal = document.getElementById('myReservationsModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeMyReservationsModal = function() {
        const modal = document.getElementById('myReservationsModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // --- FUNCIÓN INTERNA ---
    function handleReservationSubmit(event) {
        event.preventDefault();

        const loggedInUser = localStorage.getItem('loggedInUser');
        const packageTitle = document.getElementById('packageTitleInput').value;
        const packagePrice = parseFloat(document.getElementById('packagePriceInput').value.replace('$', ''));
        const travelDate = document.getElementById('travelDate').value;
        const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
        const specialRequests = document.getElementById('specialRequests').value;
        const totalPrice = (packagePrice * numberOfPeople).toFixed(2);

        const newReservation = {
            id: Date.now(),
            username: loggedInUser,
            packageTitle,
            packagePrice,
            travelDate,
            numberOfPeople,
            specialRequests,
            totalPrice,
            status: 'Pendiente',
            bookingDate: new Date().toISOString()
        };

        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(newReservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));

        window.showToast('¡Reserva confirmada! Revisa "Mis Reservas".');
        window.closeReservationModal();
    }
});