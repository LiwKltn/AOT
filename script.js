
const titanes = [
    {
        nombre: "Titán de Ataque",
        imagen: "images/titan-ataque.jpg",
        descripcion: "Conocido por su ferocidad en combate y su capacidad para ver memorias de portadores pasados y futuros.",
        habilidades: "Fuerza aumentada, visión de memorias, resistencia"
    },
    {
        nombre: "Titán Fundador",
        imagen: "images/titan-fundador.jpg",
        descripcion: "El más poderoso de todos los titanes, capaz de controlar a otros titanes y manipular memorias.",
        habilidades: "Control de titanes, manipulación de memorias, creación de titanes"
    },
    {
        nombre: "Titán Colosal",
        imagen: "images/titan-colosal.jpg",
        descripcion: "Un titán de 60 metros de altura que puede generar explosiones de vapor ardiente.",
        habilidades: "Tamaño masivo, explosiones de vapor, fuerza destructiva"
    },
    {
        nombre: "Titán Acorazado",
        imagen: "images/titan-acorazado.jpg",
        descripcion: "Cubierto por placas de armadura casi indestructibles, excepto en ciertas áreas.",
        habilidades: "Armadura dura, fuerza física, resistencia"
    },
    {
        nombre: "Titán Hembra",
        imagen: "images/titan-hembra.jpg",
        descripcion: "Titán con características femeninas y capacidad para atraer titanes puros con sus gritos.",
        habilidades: "Atracción de titanes, velocidad, endurecimiento selectivo"
    },
    {
        nombre: "Titán Mandíbula",
        imagen: "images/titan-mandibula.jpg",
        descripcion: "El más pequeño y rápido de los nueve, con mandíbulas y garras extremadamente fuertes.",
        habilidades: "Velocidad, mandíbulas poderosas, garras afiladas"
    },
    {
        nombre: "Titán Carguero",
        imagen: "images/titan-carguero.jpg",
        descripcion: "Titán cuadrúpedo con gran resistencia y capacidad para transportar cargas pesadas.",
        habilidades: "Resistencia extrema, movimiento rápido, capacidad de carga"
    },
    {
        nombre: "Titán Martillo de Guerra",
        imagen: "images/titan-martillo.jpg",
        descripcion: "Puede crear estructuras de titanita desde el suelo y ser controlado a distancia.",
        habilidades: "Creación de armas, control a distancia, titanita"
    },
    {
        nombre: "Titán Bestia",
        imagen: "images/titan-bestia.jpg",
        descripcion: "Titán simiesco con la capacidad de lanzar objetos con precisión y controlar titanes.",
        habilidades: "Lanzamiento preciso, control de titanes, fuerza"
    }
];


const personajes = [
    {
        nombre: "Eren Yeager",
        imagen: "images/eren.jpg",
        descripcion: "Protagonista de la serie. Portador del Titán de Ataque y más tarde del Titán Fundador.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Mikasa Ackerman",
        imagen: "images/mikasa.jpg",
        descripcion: "Una de los últimos miembros del clan Ackerman. Hermana adoptiva de Eren y una de los soldados más fuertes.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Armin Arlert",
        imagen: "images/armin.jpg",
        descripcion: "Mejor amigo de Eren y Mikasa. Estratega brillante que más tarde hereda el Titán Colosal.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Levi Ackerman",
        imagen: "images/levi.jpg",
        descripcion: "Conocido como el soldado más fuerte de la humanidad. Capitán del escuadrón de operaciones especiales.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Erwin Smith",
        imagen: "images/erwin.jpg",
        descripcion: "Ex comandante de la Legión de Reconocimiento. Estratega brillante y líder carismático.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Hange Zoë",
        imagen: "images/hange.jpg",
        descripcion: "Experta en titanes y más tarde comandante de la Legión de Reconocimiento.",
        afiliacion: "Legión de Reconocimiento"
    },
    {
        nombre: "Reiner Braun",
        imagen: "images/reiner.jpg",
        descripcion: "Portador del Titán Acorazado. Infiltró Paradis como soldado antes de revelarse como Guerrero.",
        afiliacion: "Guerreros de Marley"
    },
    {
        nombre: "Annie Leonhart",
        imagen: "images/annie.jpg",
        descripcion: "Portadora del Titán Hembra. Infiltró Paradis como soldado antes de ser descubierta.",
        afiliacion: "Guerreros de Marley"
    },
    {
        nombre: "Zeke Yeager",
        imagen: "images/zeke.jpg",
        descripcion: "Portador del Titán Bestia y medio hermano de Eren. Líder de los Guerreros de Marley.",
        afiliacion: "Guerreros de Marley"
    }
];


function crearTarjeta(item, tipo) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    
    tarjeta.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${item.imagen}" alt="${item.nombre}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">
            </div>
            <div class="card-back">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p><strong>${tipo === 'titan' ? 'Habilidades:' : 'Afiliación:'}</strong> ${tipo === 'titan' ? item.habilidades : item.afiliacion}</p>
            </div>
        </div>
    `;
    
    return tarjeta;
}


document.addEventListener('DOMContentLoaded', () => {
    const titanesContainer = document.getElementById('titanes-container');
    const personajesContainer = document.getElementById('personajes-container');
    
   
    titanes.forEach(titan => {
        titanesContainer.appendChild(crearTarjeta(titan, 'titan'));
    });
    
    
    personajes.forEach(personaje => {
        personajesContainer.appendChild(crearTarjeta(personaje, 'personaje'));
    });
    
    
    const counterImage = document.getElementById('counter-image');
    const counter = document.getElementById('counter');
    let muerteCount = localStorage.getItem('muerteCount') || 0;
    counter.textContent = muerteCount;
    
    
    counterImage.addEventListener('click', () => {
        muerteCount++;
        counter.textContent = muerteCount;
        localStorage.setItem('muerteCount', muerteCount);
        
        
        counter.classList.add('pulse');
        counterImage.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            counter.classList.remove('pulse');
            counterImage.style.transform = 'scale(1)';
        }, 300);
    });
    
    
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
        };
    });
});