import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  title: string;
  description: string;
  img: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-principios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principios.component.html',
  styleUrl: './principios.component.css'
})

export class PrincipiosComponent {
  items: Item[] = [
    {
      title: 'Accesibilidad',
      description: 'La accesibilidad se refiere a la facilidad con la que los usuarios autorizados pueden acceder a la información y los recursos del sistema. Esto implica asegurar que los sistemas y datos sean accesibles en el momento y lugar requeridos, sin restricciones innecesarias. Mantener la accesibilidad es esencial para la operación continua de las organizaciones y para permitir que los empleados realicen sus tareas de manera eficiente.',
      img: 'accesibilidad.png',
      isOpen: false
    },
    {
      title: 'Confidencialidad',
      description: 'La confidencialidad asegura que la información sensible solo sea accesible para aquellas personas que tienen el derecho de conocerla. Este principio se mantiene mediante controles de acceso, cifrado y políticas de seguridad. La protección de la confidencialidad es crucial en entornos donde se manejan datos personales o información confidencial, como en la atención médica, finanzas y recursos humanos.',
      img: 'confidencialidad.png',
      isOpen: false
    },
    {
      title: 'Disponibilidad',
      description: 'La disponibilidad garantiza que la información y los recursos estén accesibles y utilizables cuando sean necesarios. Esto implica la implementación de medidas para prevenir interrupciones en el servicio, como copias de seguridad regulares, redundancia de sistemas y planes de recuperación ante desastres. Mantener la disponibilidad es esencial para la continuidad del negocio y la satisfacción del cliente.',
      img: 'disponibilidad1.png',
      isOpen: false
    },
    {
      title: 'Autenticación',
      description: 'La autenticación es el proceso de verificar la identidad de un usuario o sistema antes de otorgar acceso a información o recursos. Esto puede realizarse a través de contraseñas, tokens de seguridad, autenticación biométrica, entre otros. Un sistema de autenticación sólido es crucial para proteger los datos y evitar accesos no autorizados.',
      img: 'autenticacion.png',
      isOpen: false
    },
    {
      title: 'Integridad',
      description: 'La integridad garantiza que la información se mantenga exacta y completa, sin modificaciones no autorizadas. Esto implica el uso de controles como hash y sumas de verificación para detectar cambios en los datos. Proteger la integridad de la información es vital para la confianza en los sistemas de información y la toma de decisiones basadas en datos.',
      img: 'integridad.png',
      isOpen: false
    },
    {
      title: 'Control de acceso',
      description: 'El control de acceso implica restringir el acceso a recursos e información solo a aquellos usuarios que están autorizados. Esto se logra mediante la implementación de políticas de seguridad que definen los derechos y privilegios de cada usuario. Un control de acceso efectivo es fundamental para mantener la confidencialidad y la integridad de la información en un sistema.',
      img: 'control_acceso.png',
      isOpen: false
    }
  ];

  toggleDropdown(item: Item) {
    item.isOpen = !item.isOpen;
  }
}