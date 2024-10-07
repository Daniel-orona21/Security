import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  title: string;
  description: string;
  img: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-confidencialidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confidencialidad.component.html',
  styleUrl: './confidencialidad.component.css'
})

export class ConfidencialidadComponent {
  items: Item[] = [
    {
      title: 'Ley General de protección de datos Personales de México',
      description: 'Promulgada en 2010, esta ley establece un marco jurídico para la protección de datos personales de los individuos en México. Busca garantizar que el tratamiento de la información personal se realice de manera lícita y justa, asegurando la privacidad y el derecho a la autodeterminación informativa. Las entidades que manejan datos personales deben contar con el consentimiento explícito de los titulares y cumplir con principios de seguridad y confidencialidad.',
      img: 'mex.png',
      isOpen: false
    },
    {
      title: 'Ley de propiedad industrial',
      description: 'Esta ley protege los derechos sobre invenciones, diseños y signos distintivos, como marcas y nombres comerciales. Promulgada en 1991, tiene como objetivo fomentar la innovación y la competitividad al ofrecer a los inventores y empresas un marco legal que les permita proteger sus creaciones y evitar el uso no autorizado por parte de terceros. La ley también regula la concesión de patentes y su duración.',
      img: 'industrial.png',
      isOpen: false
    },
    {
      title: 'Ley federal de derechos de autor',
      description: 'Promulgada para proteger las obras literarias y artísticas, esta ley asegura que los autores tengan derechos exclusivos sobre sus creaciones. Incluye obras escritas, música, arte visual, y otros tipos de expresiones creativas. La ley busca prevenir el uso no autorizado de las obras y establece mecanismos para la protección y defensa de los derechos de autor, permitiendo a los creadores obtener beneficios económicos de su trabajo.',
      img: 'copy.png',
      isOpen: false
    },
    {
      title: 'Ley federal de datos personales en posesión de particulares',
      description: 'Complementaria a la Ley General de Protección de Datos, esta legislación regula el manejo de datos personales por parte de particulares, tanto en el sector privado como en el público. Establece obligaciones para los responsables del tratamiento de datos, incluyendo la necesidad de informar a los titulares sobre el uso de sus datos y asegurar medidas de protección adecuadas para evitar su uso indebido.',
      img: 'personal.png',
      isOpen: false
    },
    {
      title: 'Código penal federal',
      description: 'El Código Penal Federal incluye diversas disposiciones que tipifican delitos relacionados con la privacidad y la protección de datos. Por ejemplo, se establecen sanciones para quienes cometan fraudes a través del acceso no autorizado a sistemas informáticos o la divulgación de información personal sin consentimiento. Esta legislación es crucial para combatir la delincuencia cibernética y proteger los derechos de los ciudadanos.',
      img: 'penal.png',
      isOpen: false
    },
    {
      title: 'Ley general de transparencia y acceso a la información',
      description: 'Promulgada en 2015, esta ley garantiza el derecho de acceso a la información pública y establece las bases para la transparencia en el funcionamiento de las entidades públicas. Su objetivo es fomentar la rendición de cuentas y el acceso a información sobre la gestión gubernamental, asegurando que los ciudadanos puedan ejercer su derecho a saber y participando activamente en la vida democrática.',
      img: 'trans.png',
      isOpen: false
    },
    {
      title: 'Criptografía simétrica',
      description: 'La criptografía simétrica utiliza una única clave para cifrar y descifrar datos. Este método es eficiente y rápido, lo que lo hace adecuado para manejar grandes volúmenes de información. Sin embargo, el principal desafío es la distribución segura de la clave; si esta se ve comprometida, la seguridad de la información también lo estará. Ejemplos comunes de algoritmos simétricos son AES y DES.',
      img: 'sime.png',
      isOpen: false
    },
    {
      title: 'Criptografía asimétrica',
      description: 'La criptografía asimétrica utiliza un par de claves: una clave pública para cifrar datos y una clave privada para descifrarlos. Este enfoque elimina la necesidad de compartir claves secretas, facilitando la comunicación segura a través de redes inseguras. Es ampliamente utilizada en protocolos de seguridad en línea, como HTTPS, y en aplicaciones de firma digital. Ejemplos de algoritmos asimétricos son RSA y ECC.',
      img: 'sime.png',
      isOpen: false
    },
    {
      title: 'Cifrado por bloques y por flujo',
      description: 'El cifrado por bloques procesa datos en bloques de tamaño fijo y cifra cada bloque de manera independiente, lo que lo hace adecuado para almacenar grandes cantidades de información de forma segura. En cambio, el cifrado por flujo cifra datos de manera continua, ideal para aplicaciones que requieren un flujo constante de información, como la transmisión de audio o video. Ambos métodos son esenciales para proteger la confidencialidad de los datos en entornos digitales.',
      img: 'cifrado.png',
      isOpen: false
    },
    {
      title: 'Criptoanálisis',
      description: 'El criptoanálisis es el estudio y la práctica de romper sistemas criptográficos, buscando debilidades en algoritmos y su implementación. Los criptoanalistas utilizan diversas técnicas para evaluar la seguridad de los métodos de cifrado y proponer mejoras. Este campo es fundamental para proteger la información y desarrollar métodos más seguros en respuesta a las amenazas emergentes.',
      img: 'cripto.png',
      isOpen: false
    },
  ];

  toggleDropdown(item: Item) {
    item.isOpen = !item.isOpen;
  }
}