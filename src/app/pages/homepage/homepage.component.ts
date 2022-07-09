import { Component, OnInit } from '@angular/core';
import { cardModel } from 'src/app/components/card/cardModel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  datosCard: cardModel[];
  constructor() {
    this.datosCard = [
      {
        titulo: 'F1 2021',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg1',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
      {
        titulo: 'F1 2021',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg1',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
      {
        titulo: 'F1 2022',
        descripcion:
          'Entra en la nueva era de la Fórmula 1® en EA SPORTS™ F1® 22, el videojuego oficial del Campeonato Mundial de Fórmula Uno de la FIA 2022™. Tome asiento para una nueva temporada mientras los autos rediseñados y las reglas revisadas redefinen el día de la carrera, pruebe sus habilidades en el nuevo Autódromo Internacional de Miami y pruebe el brillo y el glamour en F1® Life.',
        img: 'https://www.gamestorrents.fm/wp-content/uploads/2022/07/F1-22-pc-free-download.jpg',
        altimg: 'altimg2',
      },
    ];
  }

  ngOnInit(): void {
    console.log('datoscard', this.datosCard);
  }
}
