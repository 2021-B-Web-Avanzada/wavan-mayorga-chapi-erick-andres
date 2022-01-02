import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examen1B';
  banners = [
    {
      title: 'Diseñado para la vida de hoy y de mañana',
      text: 'La nueva generación de juegos. Tus objetivos. Familia y amigos. Windows 11 está hecho para acercarte a todo lo que te encanta.',
      colorText: 'white',
      linkImagen: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLAmj?ver=35aa&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=0&s=1898&d=712&aim=true',
      textButton: 'Ve si tu PC está listo >',
      primerBoton: true
    },
    {
      title: 'Outlook para iOS y Android',
      text: 'Conecta. Organiza. Haz las cosas.',
      colorText: 'black',
      linkImagen: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OLdz?ver=d01f&amp;q=0&amp;m=8&amp;h=303&amp;w=539&amp;b=%23FFFFFFFF&amp;l=f&amp;x=808&amp;y=229&amp;s=1312&amp;d=737&amp;aim=true',
      textButton: 'Descargar ahora >',
      primerBoton: false
    }
  ]

  boxes1 = [
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWPGs4?ver=3a6f&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Microsoft 365',
      text: 'Aplicaciones prémium de Office, almacenamiento adicional en la nube, seguridad avanzada y mucho más, todo en una conveniente suscripción única.',
      textLink: 'Hasta 6 personas >',
      secondLink: true,
      textLink2: 'Para 1 persona >'
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Microsoft Edge',
      text: 'Un rendimiento de categoría mundial con más privacidad, más productividad y más valor mientras navegas.',
      textLink: 'Descargar ahora >',
      secondLink: false,
      textLink2: ''
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Microsoft OneDrive',
      text: 'Guarda tus archivos y fotos en OneDrive y accede a ellos desde cualquier dispositivo y en cualquier lugar.',
      textLink: 'Más información >',
      secondLink: false,
      textLink2: ''
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/REGxSz?ver=5bf8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'OneNote',
      text: 'Organiza tus notas y tu vida.',
      textLink: 'Más información >',
      secondLink: false,
      textLink2: ''
    }
  ]

  boxes2 = [
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJ3u?ver=7dcf&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=755&amp;y=404&amp;aim=true',
      title: 'Recibe Microsoft Teams gratis',
      text: 'Reuniones en línea, chat y almacenamiento compartido en la nube, todo en un mismo lugar.',
      textLink: 'Inscríbete gratis >',
      secondLink: false,
      textLink2: ''
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT?ver=2072&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Microsoft 365 para empresas',
      text: 'Mantente a la vanguardia con nuestras poderosas aplicaciones para la productividad, la conexión y la seguridad.',
      textLink: 'Comprar ahora >',
      secondLink: false,
      textLink2: ''
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Adquiere Visual Studio 2019',
      text: 'Descarga Visual Studio 2019, el IDE productivo, moderno e innovador.',
      textLink: 'Descargar ahora >',
      secondLink: false,
      textLink2: ''
    },
    {
      linkImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGaY8?ver=2545&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true',
      title: 'Bienvenido a tu Windows 365 Cloud PC',
      text: 'Disfruta de tu experiencia de Windows en forma segura por streaming desde la nube Microsoft a cualquier dispositivo.',
      textLink: 'Adquiérelo hoy >',
      secondLink: false,
      textLink2: ''
    }
  ]
}
