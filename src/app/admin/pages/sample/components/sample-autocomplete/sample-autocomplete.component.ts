import { Component, OnInit } from '@angular/core';
import { Debounce } from '@shared/decorators/debounce.decorator';
import { ItemComplete } from '@shared/models/item-complete.model';

@Component({
  selector: 'app-sample-autocomplete',
  templateUrl: './sample-autocomplete.component.html',
  styleUrls: ['./sample-autocomplete.component.scss']
})
export class SampleAutocompleteComponent implements OnInit {
  constructor() { }
  data: ItemComplete[] = [];
  sourceData: ItemComplete[] = [
    {
      id: 0,
      name: 'Combs Pruitt'
    },
    {
      id: 1,
      name: 'Franco Salas'
    },
    {
      id: 2,
      name: 'Irma Leblanc'
    },
    {
      id: 3,
      name: 'Parker Osborn'
    },
    {
      id: 4,
      name: 'Francis Gregory'
    },
    {
      id: 5,
      name: 'Underwood Snow'
    },
    {
      id: 6,
      name: 'Casey Chapman'
    },
    {
      id: 7,
      name: 'Lois Hamilton'
    },
    {
      id: 8,
      name: 'Kimberly Duke'
    },
    {
      id: 9,
      name: 'Grant Glover'
    },
    {
      id: 10,
      name: 'Knowles Kramer'
    },
    {
      id: 11,
      name: 'Hess Delgado'
    },
    {
      id: 12,
      name: 'Rutledge Contreras'
    },
    {
      id: 13,
      name: 'Angeline Walls'
    },
    {
      id: 14,
      name: 'Mann Combs'
    },
    {
      id: 15,
      name: 'Soto Britt'
    },
    {
      id: 16,
      name: 'Wilda Rich'
    },
    {
      id: 17,
      name: 'Ina Rodgers'
    },
    {
      id: 18,
      name: 'Dixie Jordan'
    },
    {
      id: 19,
      name: 'Maura Moody'
    },
    {
      id: 20,
      name: 'Lenora Small'
    },
    {
      id: 21,
      name: 'Ware Singleton'
    },
    {
      id: 22,
      name: 'Ferrell Chang'
    },
    {
      id: 23,
      name: 'Eunice Hunt'
    },
    {
      id: 24,
      name: 'Hardin Morin'
    },
    {
      id: 25,
      name: 'Ellison Roth'
    },
    {
      id: 26,
      name: 'Annmarie Haynes'
    },
    {
      id: 27,
      name: 'Sharp Stout'
    },
    {
      id: 28,
      name: 'Francine Melton'
    },
    {
      id: 29,
      name: 'Swanson Kelley'
    },
    {
      id: 30,
      name: 'Tanisha French'
    },
    {
      id: 31,
      name: 'Rowe Benjamin'
    },
    {
      id: 32,
      name: 'Miller Clarke'
    },
    {
      id: 33,
      name: 'Callie Frederick'
    },
    {
      id: 34,
      name: 'Christensen Warner'
    },
    {
      id: 35,
      name: 'Louisa Flores'
    },
    {
      id: 36,
      name: 'Hendricks Bauer'
    },
    {
      id: 37,
      name: 'Florine Whitley'
    },
    {
      id: 38,
      name: 'Lucile Faulkner'
    },
    {
      id: 39,
      name: 'Summer Berger'
    },
    {
      id: 40,
      name: 'Lucy Odom'
    },
    {
      id: 41,
      name: 'Flowers Fields'
    },
    {
      id: 42,
      name: 'Horton Huff'
    },
    {
      id: 43,
      name: 'Kline Fitzpatrick'
    },
    {
      id: 44,
      name: 'Ortiz Fischer'
    },
    {
      id: 45,
      name: 'Gena Figueroa'
    },
    {
      id: 46,
      name: 'Hopkins Glass'
    },
    {
      id: 47,
      name: 'Jeanie Gordon'
    },
    {
      id: 48,
      name: 'Moses Eaton'
    },
    {
      id: 49,
      name: 'Jacquelyn Joseph'
    },
    {
      id: 50,
      name: 'Rosa Lawrence'
    },
    {
      id: 51,
      name: 'Michele Casey'
    },
    {
      id: 52,
      name: 'Hope Watson'
    },
    {
      id: 53,
      name: 'Blanche Kidd'
    },
    {
      id: 54,
      name: 'Workman Sharpe'
    },
    {
      id: 55,
      name: 'Ivy Weeks'
    },
    {
      id: 56,
      name: 'Dickson Hays'
    },
    {
      id: 57,
      name: 'Mavis Swanson'
    },
    {
      id: 58,
      name: 'Sophia Ballard'
    },
    {
      id: 59,
      name: 'Effie Valdez'
    },
    {
      id: 60,
      name: 'Lowe Suarez'
    },
    {
      id: 61,
      name: 'Emma Gamble'
    },
    {
      id: 62,
      name: 'Gould Sosa'
    },
    {
      id: 63,
      name: 'French Conway'
    },
    {
      id: 64,
      name: 'Lilia Perez'
    },
    {
      id: 65,
      name: 'Dorsey Jensen'
    },
    {
      id: 66,
      name: 'Bianca Berry'
    },
    {
      id: 67,
      name: 'Hopper Short'
    },
    {
      id: 68,
      name: 'Kent Wright'
    },
    {
      id: 69,
      name: 'Katherine Park'
    },
    {
      id: 70,
      name: 'Rivas Vazquez'
    },
    {
      id: 71,
      name: 'Witt Goodman'
    },
    {
      id: 72,
      name: 'Jimenez Crane'
    },
    {
      id: 73,
      name: 'Nelson Snider'
    },
    {
      id: 74,
      name: 'Matthews Bolton'
    },
    {
      id: 75,
      name: 'Landry Bray'
    },
    {
      id: 76,
      name: 'Pearlie Norris'
    },
    {
      id: 77,
      name: 'Jasmine Fleming'
    },
    {
      id: 78,
      name: 'Best Ray'
    },
    {
      id: 79,
      name: 'Reese Rasmussen'
    },
    {
      id: 80,
      name: 'Peterson Giles'
    },
    {
      id: 81,
      name: 'Inez Carson'
    },
    {
      id: 82,
      name: 'Bernard Simmons'
    },
    {
      id: 83,
      name: 'Freida Maldonado'
    },
    {
      id: 84,
      name: 'Jennie Henry'
    },
    {
      id: 85,
      name: 'Morse Wagner'
    },
    {
      id: 86,
      name: 'Becker Trujillo'
    },
    {
      id: 87,
      name: 'Burke Mendez'
    },
    {
      id: 88,
      name: 'Phillips Richard'
    },
    {
      id: 89,
      name: 'Gordon William'
    },
    {
      id: 90,
      name: 'Acosta Moore'
    },
    {
      id: 91,
      name: 'Lacey Emerson'
    },
    {
      id: 92,
      name: 'Lou Sanders'
    },
    {
      id: 93,
      name: 'Barlow Adkins'
    },
    {
      id: 94,
      name: 'Cherry Dawson'
    },
    {
      id: 95,
      name: 'Wilson Parker'
    },
    {
      id: 96,
      name: 'Valdez Hart'
    },
    {
      id: 97,
      name: 'Cassandra Hale'
    },
    {
      id: 98,
      name: 'Adriana Day'
    },
    {
      id: 99,
      name: 'Benson Hoffman'
    }
  ];

  // =============== Debouce =========================
  username = '';

  ngOnInit(): void {
  }

  search(keySearch) {
    // call API
    this.data = this.sourceData.filter(item => item.name.includes(keySearch));
  }

  selectedItem(e) {
    // Do something
  }

  // Sử dụng khi muốn user ko nhập gì trong khoảng 1s thì mới bắt đầu call API
  @Debounce(1000)
  searchUser() {
    console.log(this.username);
    // call API
  }
}
