// Variable global para almacenar el mapa actual
let currentMapUrl = '';

// Itinerarios personalizados para cada paquete
const itineraries = {
    itin1: `
         <div class="accordion" id="itineraryAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Día 1: Exploración en Parque Nacional El Imposible
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>08:00 AM</strong> – Salida desde San Salvador hacia Parque Nacional El Imposible, Ahuachapán (3 h aprox.)<br>
                    <strong>11:00 AM</strong> – Llegada y registro en el Centro de Visitantes El Imposible.<br>
                    <strong>11:30 AM</strong> – Caminata guiada por el Sendero Los Enganches:<br>
                    • Observación de flora y fauna tropical.<br>
                    • Paradas en los miradores El Mulo y El León con vistas al océano Pacífico.<br>
                    <strong>01:30 PM</strong> – Almuerzo típico en Restaurante El Mirador del Imposible<br>
                    <strong>03:00 PM</strong> – Tour ecológico por el Mirador El Mulo y visita al Puente de Piedra.<br>
                    <strong>05:30 PM</strong> – Retorno al alojamiento.<br>
                    <strong>07:00 PM</strong> – Cena y fogata nocturna con bebidas típicas en Eco-Lodge San Benito (ubicado dentro del parque).<br>
                    <strong>Noche</strong> en Eco-Lodge, Parque El Imposible.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Día 2: Ruta El Naranjal
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>07:30 AM</strong> – Desayuno típico en el lodge<br>
                    <strong>08:30 AM</strong> – Traslado hacia Tacuba (20 min).<br>
                    <strong>09:00 AM</strong> – Inicio de recorrido guiado por la Ruta El Naranjal:<br>
                    • Caminata hacia las Cascadas El Naranjal y El Bebedero.<br>
                    • Baño en pozas naturales y tiempo para fotografías.<br>
                    • Observación de aves tropicales con guía local.<br>
                    <strong>12:30 PM</strong> – Almuerzo en Restaurante Entre Pinos<br>
                    <strong>02:00 PM</strong> – Actividades opcionales:<br>
                    • Tirolesa sobre el bosque (según condiciones del clima).<br>
                    • Rappel en cascada El Bebedero.<br>
                    • Descanso en hamacas y sesión fotográfica.<br>
                    <strong>05:00 PM</strong> – Regreso al alojamiento en Tacuba.<br>
                    <strong>07:00 PM</strong> – Cena en Café Tacuba, restaurante local reconocido por su cocina artesanal<br>
                    <strong>Noche</strong> en Entre Pinos.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Día 3: Amanecer, sabores locales y despedida
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>06:00 AM</strong> – Caminata al amanecer por los senderos de Tacuba, con vistas a los volcanes de Ahuachapán.<br>
                    <strong>07:30 AM</strong> – Desayuno en la posada<br>
                    <strong>09:00 AM</strong> – Tiempo libre para compras de productos típicos<br>
                    <strong>11:00 AM</strong> – Check-out y salida hacia San Salvador.<br>
                    <strong>12:30 PM</strong> – Almuerzo de despedida en Restaurante Café Entre Nubes, en Concepción de Ataco (vista panorámica del Cerro de Apaneca).<br>
                    <strong>02:30 PM</strong> – Continuación del viaje hacia San Salvador o aeropuerto.<br>
                    <strong>04:30 PM</strong> – Fin del servicio.
                </div>
            </div>
        </div>
    </div>
    `,
    itin2: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: San Salvador → Cerro Verde
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Salida desde el Centro Histórico en transporte privado.<br>
                        <strong>08:00 AM</strong> – Llegada al complejo del área natural protegida Los Volcanes (Santa Ana).<br>
                        <strong>08:00 AM a 09:30 AM</strong> – Inicio de caminata guiada al cráter del Volcán Ilamatepec (nivel moderado).<br>
                        <strong>09:30 AM a 09:50 AM</strong> – Tiempo para fotografías en el cráter.<br>
                        <strong>09:50 AM a 11:40 AM</strong> – Descenso del volcán y llegada a Cerro Verde.<br>
                        <strong>11:40 AM a 12:00 PM</strong> – Descanso para cambiarse, ir al baño, etc.<br>
                        <strong>12:00 PM a 01:00 PM</strong> – Almuerzo en Los Volcanes Bistro Café.<br>
                        <strong>01:00 PM a 04:00 PM</strong> – Recorrido guiado por senderos del parque y miradores (caminata suave).<br>
                        <strong>04:00 PM a 05:00 PM</strong> – Traslado y llegada a Bosques del Tibet.<br>
                        <strong>05:00 PM a 06:30 PM</strong> – Check-in en el hotel e instalación en las habitaciones.<br>
                        <strong>06:30 PM a 08:00 PM</strong> – Cena en el Hotel.<br>
                        <strong>08:00 PM</strong> – Descanso.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Cerro Verde → volcán de Izalco
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM a 08:00 AM</strong> – Desayuno en restaurante Bosques del Tibet.<br>
                        <strong>08:00 AM a 08:40 AM</strong> – Salida y llegada a Izalco.<br>
                        <strong>08:40 AM a 11:00 AM</strong> – Recorrido guiado por el centro de Izalco (vistas al volcán).<br>
                        <strong>11:00 AM a 12:00 PM</strong> – Espacio para comprar artesanías.<br>
                        <strong>12:00 PM a 01:30 PM</strong> – Almuerzo local en Izalco.<br>
                        <strong>01:30 PM a 03:00 PM</strong> – Salida y llegada a Apaneca.<br>
                        <strong>03:00 PM a 04:00 PM</strong> – Check-in en las cabañas de Apaneca y acomodación en la habitación.<br>
                        <strong>04:00 PM a 06:00 PM</strong> – Caminata por Apaneca.<br>
                        <strong>06:00 PM a 07:00 PM</strong> – Cena en Rata Touille.<br>
                        <strong>07:00 PM a 08:00 PM</strong> – Tiempo para disfrutar de la noche de Apaneca.<br>
                        <strong>08:00 PM</strong> – Descanso.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Laguna Verde y Regreso a San Salvador
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM a 08:30 AM</strong> – Desayuno en el Hotel.<br>
                        <strong>08:30 AM a 09:00 AM</strong> – Salida y llegada a Laguna Verde.<br>
                        <strong>09:00 AM a 10:00 AM</strong> – Caminata guiada por los alrededores de la Laguna Verde.<br>
                        <strong>10:00 AM a 12:00 PM</strong> – Tours en cuatrimoto y lancha por la laguna.<br>
                        <strong>12:00 PM a 12:30 PM</strong> – Regreso a Apaneca.<br>
                        <strong>12:30 PM a 01:30 PM</strong> – Almuerzo en Café Albania.<br>
                        <strong>01:30 PM a 02:00 PM</strong> – Regreso al hotel y salida.<br>
                        <strong>02:00 PM a 04:00 PM</strong> – Salida y llegada al centro histórico.<br>
                        <br>
                        <strong>Incluye:</strong><br>
                        • Transporte privado<br>
                        • Hospedaje<br>
                        • Alimentación completa<br>
                        • Caminata guiada al volcán de Santa Ana<br>
                        • Tours por Cerro Verde<br>
                        • Recorrido por Izalco<br>
                        • Tours en cuatrimoto y lancha en Laguna Verde<br>
                        • Entradas a todos los parques
                    </div>
                </div>
            </div>
        </div>
    `,
    itin3: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: San Salvador - Flores, Peten
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> Salida temprano en transporte terrestre privado<br>
                        <strong>09:00 AM</strong> Cruce fronterizo en Anguiatú <br>
                        <strong>12:00 PM</strong> Almuerzo durante la ruta.<br>
                        <strong>01:00 PM</strong> Llegada a Flores (Petén) y check-in en hotel.<br>
                        <strong></strong> Tarde libre para recorrer la Isla de Flores.<br>
                        <strong>07:00 PM</strong> Cena en restaurante local .
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Lago Petén Itzá
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno en el Hotel.<br>
                        <strong>09:30 AM</strong> – Tour en lancha por el Lago Petén Itzá.<br>
                        <strong>11:30 AM</strong> – Visita a Playa El Remate y miradores.<br>
                        <strong>01:00 PM</strong> – Almuerzo Tipico.<br>
                        <strong>03:00 PM</strong> – Opcional: visita al Zoológico ARCAS o Museo de la Isla<br>
                        <strong>07:00 PM</strong> – Cena y descanso.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Parque Nacional Tikal
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Desayuno.<br>
                        <strong>08:00 AM</strong> – Excursión guiada a Tikal (entrada + guía).<br>
                        <strong>12:00 PM</strong> – Caminata por las ruinas y observación de fauna<br>
                        <strong>12:30 AM</strong> – Almuerzo dentro del Parque<br>
                        <strong>03:00 PM</strong> – Regreso a Flores por la tarde<br>
                        <strong>07:00 PM</strong> – Cena y descanso.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Flores-Laguna Lachuá
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Desayuno.<br>
                        <strong>08:00 AM</strong> – Traslado hacia Laguna Lachuá (aprox. 4 horas).<br>
                        <strong>12:00 PM</strong> – Caminata ecológica (4 km) hasta la laguna.<br>
                        <strong>12:30 AM</strong> – Almuerzo Tipo Picnic<br>
                        <strong>01:00 PM</strong> – Disfrute de la laguna (baño, fotos, naturaleza).<br>
                        <strong>03:00 PM</strong> – Hospedaje en cabañas rústicas dentro del parque<br>
                        <strong>07:00 PM</strong> – Cena.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 5: Laguna Lachuá - San Salvador
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Desayuno.<br>
                        <strong>08:00 AM</strong> – Regreso hacia San Salvador (aprox. 8 horas).<br>
                        <strong>12:00 PM</strong> – Almuerzo en Ruta<br>
                        <strong>03:00 PM</strong> – Llegada por la tarde<br>
                    </div>
                </div>
            </div>
        </div>
    `,
    itin4: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Bienvenida y tour en Antigua Guatemala
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:30 AM</strong> – Recogida en Ciudad de Guatemala o Aeropuerto y traslado a Antigua (1 h aprox.).<br>
                        <strong>09:30 AM</strong> – Check-in en hotel boutique.<br>
                        <strong>10:00 AM</strong> – City Tour por Antigua Guatemala:<br>
                        • Arco de Santa Catalina<br>
                        • Iglesia La Merced<br>
                        • Convento Las Capuchinas<br>
                        • Parque Central y Catedral<br>
                        <strong>01:00 PM</strong> – Almuerzo en Restaurante Casa Escobar<br>
                        <strong>03:00 PM</strong> – Tour de Café en Finca Filadelfia: proceso, degustación y vistas.<br>
                        <strong>05:30 PM</strong> – Tiempo libre para compras en mercados artesanales.<br>
                        <strong>07:00 PM</strong> – Cena en Restaurante Fridas<br>
                        <strong>Noche</strong> en Hotel Boutique Antigua Guatemala.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Aventura y Fantasía en Hobbitenango
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:30 AM</strong> – Desayuno en hotel Boutique en Antigua Guatemala.<br>
                        <strong>08:30 AM</strong> – Traslado a Hobbitenango (20 min).<br>
                        <strong>09:00 AM</strong> – Exploración del parque temático:<br>
                        • Aldea Hobbit<br>
                        • Miradores (incluyendo "El Coloso y su Mano de Piedra")<br>
                        • Columpio gigante a 2,500 m de altura<br>
                        • Mini golf y juegos de feria<br>
                        <strong>Actividades:</strong> tiro con arco y hacha.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante temático con vistas a los volcanes.<br>
                        <strong>03:00 PM</strong> – Caminata por senderos y sesión fotográfica en miradores.<br>
                        <strong>05:00 PM</strong> – Check-in en cabaña temática (Casita del Sueño, Nido o Cala Esmeralda).<br>
                        <strong>07:00 PM</strong> – Cena en la cabaña (opcional con vino).<br>
                        <strong>Noche</strong> mágica en Hobbitenango.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Amanecer entre volcanes y despedida
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Amanecer con vistas a los volcanes Agua, Fuego y Acatenango.<br>
                        <strong>07:30 AM</strong> – Desayuno en la cabaña.<br>
                        <strong>09:00 AM</strong> – Tiempo libre para fotos y actividades adicionales.<br>
                        <strong>11:00 AM</strong> – Check-out y traslado a Antigua.<br>
                        <strong>12:00 PM</strong> – Almuerzo en restaurante con vista panorámica Restaurante Altamira.<br>
                        <strong>02:00 PM</strong> – Regreso a Ciudad de Guatemala o aeropuerto.<br>
                        <strong>04:00 PM</strong> – Fin del servicio.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin5: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Salida desde San Salvador hacia Río Dulce.
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>01:00 AM</strong> – Hora de Salida desde Gasolinera Puma Palermo(San Salvador)<br>
                        <strong>08:00 AM</strong> – Llegadad a Rio Dulce.<br>
                        <strong>08:15 AM</strong> – Desayuno recomendado: Restaurante "Backpackers" frente al rí<br>
                        <strong>09:00 AM - 03:00 PM</strong> – Tour en lancha.<br>
                        <strong>07:30 PM</strong> – Cena local.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Tikal
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Salida hacia las Flores.<br>
                        <strong>07:00 AM</strong> – Desayuno en ruta: Restaurante "La Galería" en Isla de Flores.<br>
                        <strong>07:30 AM</strong> – Traslado a Tikal<br>
                        <strong>08:30 AM</strong> – Entrada a Tikal.<br>
                        <strong>09:00 AM - 01:00 PM</strong> – Tour guiado: Templos I, II, IV, Mundo Perdido, Acrópolis.<br>
                        <strong>03:00 PM</strong> – Regreso a Flores. <br>
                        <strong>07:00 PM</strong> – Cena en el hospedaje.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Regreso a San Salvador
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno y check-out.<br>
                        <strong>09:30 AM</strong> – Salida de las Flores<br>
                        <strong>12:30 PM</strong> – Almuerzo en Ruta : Restaurante "El Establo" en Chiquimula.<br>
                        <strong>04:00 PM</strong> – Llegada a San Salvador.<br>
                    </div>
                </div>
            </div>
        </div>
    `,
    itin6: `
       <div class="accordion" id="itineraryAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Día 1: De San Salvador a Ecoparque Santa Rita
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>6:00 AM</strong> – Salida desde Gasolinera Shell boulevard de los héroes.<br>
                    <strong>8:00 AM</strong> – Check-in en el hotel 1961 Los Naranjos Hotel y asignación de cuartos.<br>
                    <strong>8:30 AM</strong> – Desayuno en el hotel.<br>
                    <strong>9:00 AM</strong> – Traslado al complejo de Santa Rita Ecoparque.<br>
                    <strong>9:30 AM</strong> – Visita guiada por los senderos del Ecoparque, paisajismo y avistamiento de flora y fauna silvestre.<br>
                    <strong>11:00 AM</strong> – Descanso y toma de fotos.<br>
                    <strong>11:30 AM</strong> – Almuerzo en la localidad vecinal.<br>
                    <strong>1:00 PM</strong> – Vistas del pez lagarto en El zanjón El chino en Santa Rita y visita al refugio de caimanes.<br>
                    <strong>5:00 PM</strong> – Regreso al hotel.<br>
                    <strong>6:00 PM</strong> – Cena y posterior descanso.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Día 2: Al Manglar barra de Santiago
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>7:00 AM - 8:00 AM</strong> – Desayuno en hotel 1961 Los Naranjos Hotel.<br>
                    <strong>8:00 AM - 8:30 AM</strong> – Traslado a la barra de Santiago.<br>
                    <strong>8:30 AM - 12:00 PM</strong> – Paseo en lancha y avistamiento de cocodrilos, aves y naturaleza.<br>
                    <strong>12:00 PM</strong> – Almuerzo en local cercano.<br>
                    <strong>1:30 PM</strong> – Salida y llegada a la bocana, tour guiados por el estero, manglares y bancos de arena.<br>
                    <strong>4:00 PM</strong> – Check in en Mar de Oro beach house Hotel en playa los limones.<br>
                    <strong>5:00 PM - 8:00 PM</strong> – Cena, caminata por la playa y fogata.<br>
                    <strong>8:00 PM</strong> – Descanso.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Día 3: Amanecer en la playa y posterior Regreso a San Salvador
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                    <strong>5:30 AM - 6:30 AM</strong> – Presenciar el amanecer en la playa.<br>
                    <strong>6:30 AM - 8:00 AM</strong> – Desayuno en el hotel.<br>
                    <strong>8:00 AM - 1:00 PM</strong> – Mañana de playa libre.<br>
                    <strong>1:00 PM - 2:00 PM</strong> – Almuerzo en el hotel.<br>
                    <strong>2:00 PM</strong> – Regreso a San Salvador.
                </div>
            </div>
        </div>
    </div>
    `
};

// ===================================================================
// =                 FUNCIONES GLOBALES (Fuera de DOMContentLoaded)       =
// ===================================================================

/**
 * Muestra una notificación tipo toast en la pantalla.
 * @param {string} message - El mensaje a mostrar.
 * @param {string} type - 'success' o 'error'.
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.style.background = '#f44336'; // Rojo para errores
    } else {
        toast.style.background = 'var(--primary-green)'; // Verde por defecto
    }
    
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Resetea los filtros del catálogo a su estado inicial.
 */
function resetFilters() {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
    
    document.querySelectorAll('.travel-card').forEach(card => {
        card.style.display = 'block';
    });
    
    showToast('Filtros restablecidos');
}

/**
 * Función placeholder para cargar más viajes.
 */
function loadMore() {
    showToast('Cargando más viajes...');
}


// ===================================================================
// =                 INICIALIZACIÓN DEL DOM                           =
// ===================================================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // =             LÓGICA DEL MODAL DE DETALLES                 =
    // ===================================================================
    
    function openModal(title, image, description, duration, groupSize, accommodation, meals, price, mapUrl, itineraryId) {
        // Guardar datos globalmente para que el módulo de reservas pueda acceder
        window.currentPackageTitle = title;
        window.currentPackagePrice = price;
        currentMapUrl = mapUrl;

        

        // Poblar el modal
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalImage').src = image;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalDuration').textContent = duration;
        document.getElementById('modalGroupSize').textContent = groupSize;
        document.getElementById('modalAccommodation').textContent = accommodation;
        document.getElementById('modalMeals').textContent = meals;
        document.getElementById('modalPrice').textContent = price;
        
        // Cargar itinerario
        const itineraryContent = document.getElementById('itineraryContent');
        if (itineraries[itineraryId]) {
            itineraryContent.innerHTML = itineraries[itineraryId];
        }
        
        // Resetear mapa
        const mapOverlay = document.getElementById('mapOverlay');
        const mapFrame = document.getElementById('mapFrame');
        mapOverlay.style.display = 'flex';
        mapFrame.style.display = 'none';
        mapFrame.src = '';
        
        document.getElementById('detailModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function openMap() {
        const overlay = document.getElementById('mapOverlay');
        const mapFrame = document.getElementById('mapFrame');
        
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
        
        mapFrame.src = currentMapUrl;
        mapFrame.style.display = 'block';
        showToast('Mapa cargado correctamente');
    }

    function closeModal() {
        document.getElementById('detailModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Función que inicia el proceso de reserva
    function bookNow() {
        closeModal(); // Cierra el modal de detalles primero
        
        // Llama a la función del módulo de reservas
        if (typeof window.initiateReservation === 'function') {
            window.initiateReservation(window.currentPackageTitle, window.currentPackagePrice);
        } else {
            showToast('Error: El sistema de reservas no está disponible.', 'error');
        }
    }
    // Hacemos bookNow global para que el onclick en el HTML funcione
    window.bookNow = bookNow;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openMap = openMap;


    // ===================================================================
    // =                 LÓGICA DE AUTENTICACIÓN                        =
    // ===================================================================
    
    function checkLoginStatus() {
        const authButton = document.getElementById('authButton');
        const userSection = document.getElementById('userSection');
        const usernameDisplay = document.getElementById('usernameDisplay');
        
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            authButton.style.display = 'none';
            userSection.style.display = 'flex';
            usernameDisplay.textContent = loggedInUser;
        } else {
            authButton.style.display = 'block';
            userSection.style.display = 'none';
        }
    }

    function showAuthModal() {
        document.getElementById('authModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideAuthModal() {
        document.getElementById('authModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username);

        if (user && user.password === CryptoJS.SHA256(password).toString()) {
            localStorage.setItem('loggedInUser', username);
            showToast(`¡Bienvenido de nuevo, ${username}!`);
            checkLoginStatus();
            hideAuthModal();
            document.getElementById('loginForm').reset();
        } else {
            showToast('Usuario o contraseña incorrectos.', 'error');
        }
    }

    function handleRegister(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.some(u => u.username === username)) {
            showToast('El nombre de usuario ya está en uso.', 'error');
            return;
        }

        const hashedPassword = CryptoJS.SHA256(password).toString();
        users.push({ username, password: hashedPassword });
        localStorage.setItem('users', JSON.stringify(users));

        showToast('¡Cuenta creada con éxito!');
        localStorage.setItem('loggedInUser', username);
        checkLoginStatus();
        hideAuthModal();
        document.getElementById('registerForm').reset();
    }

    function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        showToast('Has cerrado sesión correctamente.');
        checkLoginStatus();
    }
    
    // Hacemos las funciones de autenticación globales
    window.showAuthModal = showAuthModal;
    window.hideAuthModal = hideAuthModal;


    // ===================================================================
    // =                 LÓGICA DEL CHATBOT (DENTRO DEL SCOPE)      =
    // ===================================================================

    // --- CEREBRO DEL CHATBOT (REGLAS Y RESPUESTAS) ---
        function generateBotResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Reglas para destinos específicos
        if (
            lowerMessage.includes("el imposible") ||
            lowerMessage.includes("naranjal") ||
            lowerMessage.includes("parque")
        ) {
            return "Nuestro Tour al Parque Nacional El Imposible y Ruta El Naranjal es una aventura de 3 días en El Salvador. Ideal para amantes de la naturaleza y el senderismo. Incluye guías, alimentación y alojamiento ecológico por solo $235 por persona. ¡Te encantará!";
        }
        if (
            lowerMessage.includes("complejo volcanico") ||
            lowerMessage.includes("volcan") ||
            lowerMessage.includes("volcanes") ||
            lowerMessage.includes("santa ana") ||
            lowerMessage.includes("izalco")
        ) {
            return "Una de las mejores aventuras inovidables por los imponentes volcanes de Santa Ana e Izalco, ideal para los amantes de la naturalez, una aventura de 3 dias en El Salvador.";
        }
        if (lowerMessage.includes("lago") || lowerMessage.includes("laguna")) {
            return "El Lago Petén Itzá y la Laguna Lachuá te invitan a descubrir dos paraísos naturales únicos en Guatemala. Petén Itzá sorprende con sus aguas turquesa, pueblos llenos de historia maya y paisajes que enamoran a primera vista, una aventura de 5 dias en hotel de prestigio con desayuno incluido.";
        }
        if (
            lowerMessage.includes("antigua") ||
            lowerMessage.includes("hobbitenango") ||
            lowerMessage.includes("historia")
        ) {
            return "La Ruta Mágica entre Antigua y Hobbitenango combina historia colonial con un mundo de fantasía. Son 3 días llenos de cultura y aventura en Guatemala por $480 por persona.";
        }
        if (
            lowerMessage.includes("Tikal") ||
            lowerMessage.includes("castillo") ||
            lowerMessage.includes("san felipe")
        ) {
            return "Tikal, Río Dulce y el Castillo de San Felipe forman un recorrido inolvidable por la historia, la naturaleza y la magia de Guatemala. Tikal te transporta al corazón del mundo maya con imponentes templos que emergen entre la selva y una energía ancestral que se siente en cada rincón, durante 3 dias, incluye desayuno y cena";
        }
        if (lowerMessage.includes("marruecos")) {
            return "Las Rutas Sostenibles por El Salvador en el Ecoparque Santa Rita y disfruta de los manglares de Barra de Santiago. Son 3 días de relajacion por $309 por persona.";
        }

        // Reglas para categorías
        if (lowerMessage.includes("Lago")) {
            return "Si buscas Lagos, te recomiendo nuestro paraíso en el lago Petén Itzá y Laguna Lachuá.";
        }
        if (lowerMessage.includes("montaña") || lowerMessage.includes("aventura")) {
            return "Para montaña y aventura, el Tour a El Imposible en El Salvador y la Aventura en Gigantes extremos son ideales. Ambos incluyen senderismo emocionante y vistas espectaculares.";
        }
        if (lowerMessage.includes("cultural") || lowerMessage.includes("ciudad")) {
            return "Nuestras opciones culturales son fascinantes. Puedes explorar las tradiciones de Kyoto en Japón, la historia de Antigua Guatemala o los mercados de Marruecos. ¿Qué cultura te interesa más conocer?";
        }
        if (lowerMessage.includes("familiar") || lowerMessage.includes("familia")) {
            return "¡Tenemos el paquete perfecto para ti! La Ruta Magica: Entre historia y fantasia está diseñada para todas las edades, con actividades seguras y divertidas.";
        }
        if (lowerMessage.includes("guatemala")) {
            return "Si buscas salir un poco de la rutina Guatemala es un pais ideal para ello por eso te ofresemos los siguiente paquetes como El Lago Petén Itzá y Laguna Lachuá, La Escapada a Tikal y Ruta Mágica: Entre Historia y Fantasía.";
        }
        if (
            lowerMessage.includes("el salvador") ||
            lowerMessage.includes("el salvador")
        ) {
            return "Si desea descubrir un poco mas El Salvador tenemos los siguientes destionos que podrian interesarte como La Ruta Mistica: Tour Parque Nacional El Imposible y Ruta El Naranjal, Espejo Verde entre Gigantes Extremos y Conexión con la naturaleza verde y salvaje ";
        }
        // Reglas generales
        if (
            lowerMessage.includes("precio") ||
            lowerMessage.includes("cuánto cuesta") ||
            lowerMessage.includes("costo")
        ) {
            return "Nuestros paquetes varían en precio para adaptarse a diferentes presupuestos, desde $235 en El Salvador hasta $440 en Guatemala.";
        }
        if (
            lowerMessage.includes("reservar") ||
            lowerMessage.includes("reserva") ||
            lowerMessage.includes("booking")
        ) {
            return "Para reservar, simplemente haz clic en 'Ver detalles' en el paquete que te interesa y luego en 'Reservar Ahora'. También puedes contactarnos directamente al +503 7121-9072. ¿Necesitas ayuda para elegir un paquete?";
        }
        if (
            lowerMessage.includes("contacto") ||
            lowerMessage.includes("teléfono") ||
            lowerMessage.includes("ubicación")
        ) {
            return "Puedes contactarnos al +503 7121-9072. Nuestra oficina está ubicada en la Universidad Tecnológica de El Salvador. ¡Estamos para ayudarte!";
        }
        if (
            lowerMessage.includes("sostenible") ||
            lowerMessage.includes("ecológico") ||
            lowerMessage.includes("medio ambiente")
        ) {
            return "En Green Travel, la sostenibilidad es nuestro pilar. Trabajamos con alojamientos ecológicos, apoyamos a comunidades locales y diseñamos viajes que minimizan el impacto ambiental. Cada aventura con nosotros es un paso hacia un turismo más responsable.";
        }
        if (lowerMessage.includes("hola") || upperMessage.includes("Hola")) {
            return "Bienvenido a Green Travel tu web de reservas de confianza";
        }
        // Respuesta por defecto
        return "Gracias por tu pregunta. Puedo ayudarte con información sobre nuestros destinos como El Imposible, Maldivas, Kyoto, Guatemala, Costa Rica o Marruecos. También puedes preguntarme sobre precios, reservas o nuestro compromiso con el turismo sostenible. ¿Qué te gustaría saber?";
        }

    function addMessage(text, sender) {
        const chatbotMessages = document.getElementById('chatbotMessages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = text;
        messageElement.appendChild(messageContent);
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const chatbotMessages = document.getElementById('chatbotMessages');
        const typingElement = document.createElement('div');
        typingElement.classList.add('typing-indicator');
        typingElement.id = 'typing-indicator';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            typingElement.appendChild(dot);
        }
        chatbotMessages.appendChild(typingElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) typingIndicator.remove();
    }

    function sendMessage() {
        const chatbotInput = document.getElementById('chatbotInput');
        const message = chatbotInput.value.trim();
        if (message === '') return;

        addMessage(message, 'user');
        chatbotInput.value = '';
        document.getElementById('chatbotSuggestions').style.display = 'none';

        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateBotResponse(message);
            addMessage(response, 'bot');
        }, 800);
    }

    // Hacemos sendSuggestion global para el onclick en el HTML
    window.sendSuggestion = function(suggestion) {
        document.getElementById('chatbotInput').value = suggestion;
        sendMessage();
    };


    // ===================================================================
    // =                 EVENT LISTENERS                             =
    // ===================================================================

    // --- AUTENTICACIÓN ---
    const authButton = document.getElementById('authButton');
    const userMenuButton = document.getElementById('userMenuButton');
    const logoutLink = document.getElementById('logoutLink');
    const authModalCloseBtn = document.getElementById('authModalCloseBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    checkLoginStatus();

    if (authButton) authButton.addEventListener('click', showAuthModal);
    if (logoutLink) logoutLink.addEventListener('click', handleLogout);
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (authModalCloseBtn) authModalCloseBtn.addEventListener('click', hideAuthModal);

    if (userMenuButton) {
        userMenuButton.addEventListener('click', function(event) {
            event.stopPropagation();
            document.getElementById('userSection').classList.toggle('show');
        });
    }

    // --- CHATBOT ---
    const chatbotBubble = document.getElementById('chatbotBubble');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotSendBtn = document.getElementById('chatbotSendBtn');
    const chatbotInput = document.getElementById('chatbotInput');

    if (chatbotBubble) {
        chatbotBubble.addEventListener('click', () => {
            document.getElementById('chatbotContainer').classList.add('active');
            chatbotBubble.classList.add('hidden');
            chatbotInput.focus();
        });
    }
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            document.getElementById('chatbotContainer').classList.remove('active');
            chatbotBubble.classList.remove('hidden');
        });
    }
    // ESTA ES LA LÍNEA QUE CAUSABA EL ERROR. AHORA 'sendMessage' ESTÁ EN EL MISMO SCOPE.
    if (chatbotSendBtn) chatbotSendBtn.addEventListener('click', sendMessage);
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // --- FITROS ---
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            document.querySelectorAll('.travel-card').forEach(card => {
                card.style.display = (filter === 'all' || card.getAttribute('data-category').includes(filter)) ? 'block' : 'none';
            });
        });
    });

    // --- FORMULARIO NEWSLETTER ---
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('¡Gracias por suscribirte!');
            this.reset();
        });
    }

    // --- MENÚ MÓVIL ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // --- SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const hrefValue = this.getAttribute('href');
            if (hrefValue && hrefValue.length > 1) {
                const target = document.querySelector(hrefValue);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (window.innerWidth <= 992 && navLinks.style.display === 'flex') {
                        navLinks.style.display = 'none';
                    }
                }
            }
        });
    });

    // --- EVENT LISTENER PARA "MIS RESERVAS" ---
    const viewReservationsLink = document.getElementById('viewReservationsLink');
    if (viewReservationsLink) {
        viewReservationsLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (typeof window.showMyReservations === 'function') {
                window.showMyReservations();
            } else {
                showToast('Error: El módulo de reservas no se ha cargado.', 'error');
            }
        });
    }

    // --- CERRAR MENÚS Y MODALES AL HACER CLIC FUERA ---
    document.addEventListener('click', function(event) {
        // Cerrar menú de usuario
        const userSection = document.getElementById('userSection');
        if (userSection && !userSection.contains(event.target)) {
            userSection.classList.remove('show');
        }

        // Cerrar modales al hacer clic en el overlay
        const modals = ['detailModal', 'authModal', 'reservationModal', 'myReservationsModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});