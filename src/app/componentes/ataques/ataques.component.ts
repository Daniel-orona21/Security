import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  title: string;
  description: string;
  img: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.css'
})

export class AtaquesComponent {
  items: Item[] = [
    {
      title: 'DDoS',
      description: 'Un ataque de Denegación de Servicio Distribuido (DDoS) es un intento malicioso de interrumpir el funcionamiento normal de un servidor, servicio o red al abrumarlo con una avalancha de tráfico. Los atacantes utilizan múltiples sistemas comprometidos (botnets) para enviar una gran cantidad de solicitudes al objetivo, superando su capacidad de respuesta. Los ataques DDoS son difíciles de mitigar y pueden durar desde minutos hasta días.',
      isOpen: false,
      img: 'ddos.png'
    },
    {
      title: 'Ordenador Zombie',
      description: 'Un ordenador zombie es un dispositivo infectado por malware y controlado de forma remota sin el conocimiento del propietario. Generalmente, los ordenadores zombies forman parte de una botnet y se utilizan para realizar actividades delictivas como ataques DDoS, envío de spam o robo de información. Son difíciles de detectar y suelen permanecer activos durante largos periodos.',
      isOpen: false,
      img: 'zombie.png'
    },
    {
      title: 'Ciberdelincuente',
      description: 'Un ciberdelincuente es una persona o grupo que comete delitos en el ciberespacio. Estos actos incluyen el robo de datos, fraude financiero, extorsión digital y distribución de malware. Los ciberdelincuentes suelen aprovechar vulnerabilidades en sistemas informáticos o utilizar técnicas como el phishing para obtener acceso no autorizado a redes y datos.',
      isOpen: false,
      img: 'delincuente.png'
    },
    {
      title: 'Botmaster',
      description: 'El botmaster es el individuo que controla una botnet, que es una red de dispositivos comprometidos. El botmaster puede usar la botnet para realizar ataques coordinados, robar datos o llevar a cabo otras actividades maliciosas. Su control remoto les permite manipular grandes cantidades de dispositivos sin ser detectados directamente.',
      isOpen: false,
      img: 'bot.png'
    },
    {
      title: 'Botnet',
      description: 'Una botnet es una red de dispositivos comprometidos que están bajo el control de un botmaster. Estas redes se utilizan comúnmente para realizar ataques DDoS, enviar correos electrónicos no deseados o robar datos sensibles. Las botnets pueden estar formadas por cientos o incluso millones de dispositivos infectados.',
      isOpen: false,
      img: 'botnet.png'
    },
    {
      title: 'Ransomware',
      description: 'El ransomware es un tipo de malware que cifra los archivos de la víctima y exige un rescate, generalmente en criptomonedas, para restaurar el acceso a ellos. Este tipo de malware se propaga a través de correos electrónicos, descargas maliciosas o vulnerabilidades en el software. Los ataques de ransomware pueden causar pérdidas económicas devastadoras para las organizaciones.',
      isOpen: false,
      img: 'ransomware.png'
    },
    {
      title: 'Disclaimer',
      description: 'Un disclaimer es una advertencia o aviso legal que aclara limitaciones de responsabilidad. En ciberseguridad, puede hacer referencia a advertencias sobre el uso de servicios, software o información que podría ser mal utilizada por terceros con fines maliciosos.',
      isOpen: false,
      img: 'disclaimer.png'
    },
    {
      title: 'The Morris Worm',
      description: 'El gusano Morris fue uno de los primeros ejemplos de malware que se propagó masivamente por la red en 1988. Creado por Robert Tappan Morris, el gusano infectó miles de ordenadores conectados a Internet, destacando la vulnerabilidad de los sistemas de la época y la necesidad de mejores medidas de seguridad.',
      isOpen: false,
      img: 'morris.png'
    },
    {
      title: 'Ciberwarfare',
      description: 'La ciberguerra o ciberwarfare es el uso de técnicas cibernéticas para atacar y defender sistemas informáticos, infraestructuras críticas y redes de un estado o grupo organizado. Las acciones pueden incluir el robo de información clasificada, la desestabilización de servicios públicos y el sabotaje de infraestructuras esenciales.',
      isOpen: false,
      img: 'ciberwarfare.png'
    },
    {
      title: 'Stuxnet',
      description: 'Stuxnet es un malware altamente sofisticado diseñado específicamente para atacar sistemas de control industrial. Su objetivo principal fueron las instalaciones nucleares de Irán, causando daños físicos a las centrifugadoras. Stuxnet es considerado un hito en la evolución de las ciberarmas.',
      isOpen: false,
      img: 'stuxnet.png'
    },
    {
      title: 'Moonlight Maze',
      description: 'Moonlight Maze fue un ciberataque a gran escala que comenzó en 1996, afectando a varias agencias gubernamentales y empresas de Estados Unidos. El ataque se enfocó en robar información clasificada, y se considera uno de los primeros ciberespionajes de larga duración conocidos.',
      isOpen: false,
      img: 'maze.png'
    },
    {
      title: 'Operation Aurora',
      description: 'Operation Aurora fue un ataque cibernético que tuvo lugar en 2009 y afectó a varias empresas, incluida Google. Los hackers, posiblemente de origen chino, se enfocaron en robar información sensible y propiedad intelectual. El ataque expuso serias vulnerabilidades en las infraestructuras corporativas.',
      isOpen: false,
      img: 'aurora.jpg'
    },
    {
      title: 'Freeze it into submission',
      description: '"Freeze it into submission" es una técnica de ataque en la que el sistema se congela temporalmente, impidiendo el acceso de los usuarios a sus datos o servicios. Esta táctica se utiliza a menudo en ransomware o en la desactivación de medidas de seguridad.',
      isOpen: false,
      img: 'freeze.png'
    },
    {
      title: 'WannaCry',
      description: 'WannaCry es un ransomware que se propagó globalmente en mayo de 2017, afectando a miles de organizaciones y dispositivos. Utilizó una vulnerabilidad en el sistema operativo Windows (EternalBlue) para cifrar archivos y exigir un rescate en Bitcoin para su recuperación.',
      isOpen: false,
      img: 'wannacry.png'
    },
    {
      title: 'Petya',
      description: 'Petya es un ransomware que sobrescribe el registro de arranque maestro (MBR) de los discos duros, haciendo que el sistema afectado sea irrecuperable a menos que se pague un rescate. Al igual que WannaCry, Petya se propagó rápidamente en 2017, causando graves interrupciones en sistemas corporativos.',
      isOpen: false,
      img: 'petya.png'
    },
    {
      title: 'Equifax (ataque)',
      description: 'En 2017, la empresa de informes crediticios Equifax sufrió una violación masiva de datos que expuso información personal y financiera de más de 147 millones de personas. El ataque fue posible gracias a una vulnerabilidad en el software Apache Struts, que no había sido parcheada a tiempo. Esta violación es considerada una de las mayores filtraciones de datos de la historia.',
      isOpen: false,
      img: 'equifax.png'
    },
    {
      title: 'Cam4 (ataque)',
      description: 'En 2020, Cam4, un sitio web de cámaras en vivo, sufrió una filtración masiva de datos que expuso más de 10.88 mil millones de registros. La información comprometida incluía direcciones IP, datos financieros, e historial de actividades. Aunque no involucró contraseñas o información de pago directa, la filtración expuso a millones de usuarios a posibles ataques de phishing.',
      isOpen: false,
      img: 'cam4.png'
    },
  ];

  toggleDropdown(item: Item) {
    item.isOpen = !item.isOpen;
  }
}