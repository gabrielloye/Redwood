import { Component, OnInit, Input } from '@angular/core';
import { faChevronUp, faChevronDown, faArrowUp, faArrowDown, faEye, faCheck, faTimes, faGift, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit {

  faChevronUp = faChevronUp;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faChevronDown = faChevronDown;
  faEye = faEye;
  faCheck = faCheck;
  faTimes = faTimes;
  faWeixin = faWeixin;
  faWhatsapp = faWhatsapp;
  faCalendarAlt = faCalendarAlt;
  faGift = faGift;
  faSearch = faSearch;
  expanded: Boolean = false;

  navigate() {
    this.router.navigate(['/portfolio'])
  }

  remove(result) {
    let name = result.name
    for (let i  in this.ideas[0]["result"]) {
      if (name === this.ideas[0]["result"][i]["name"]) {
        this.ideas[0]["result"] = this.ideas[0]["result"].slice(0,i).concat(this.ideas[0]["result"].slice(i+1,))
      }
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.ideas[0]["result"] = [this.results1[0]]
    this.ideas[1]["result"] = this.results1
    this.ideas[2]["result"] = this.results1.slice(0,2)
  }

  @Input() sidenav: any;

  ideas = [
    {
      id: 0,
      name: "Impact Investing",
      company: "Global Health Investment Fund",
      returns: -8,
      value: -120,
      scheme: "forest",
      expanded: true
    },
    {
      id: 1,
      name: "High Dividend Stock",
      company: "Target Corp TGT",
      returns: 14,
      value: 300,
      scheme: "forest",
      expanded: true
    }, 
    {
      id: 2,
      name: "Value Stock",
      company: "Johnson & Johnson (J&J)",
      returns: 2,
      value: 10,
      scheme: "forest",
      expanded: false
    }
  ]

  results1 = [
    {
      "name": "Anthony Green",
      "series": [
        {
          "name": "Interest Matching",
          "value": 0.9,
          "tooltipText": "Interest Matching - 0.9"
        },
        {
          "name": "Risk-level",
          "value": 0.7,
          "tooltipText": "Risk-level - 0.7"
        },
        {
          "name": "Credit Suitability",
          "value": 0.8,
          "tooltipText": "Credit Suitability - 0.8"
        }
      ]
    },
    {
      "name": "Jane Johnson",
      "series": [
        {
          "name": "Interest Matching",
          "value": 0.6,
          "tooltipText": "Interest Matching - 0.6"
        },
        {
          "name": "Risk-level",
          "value": 0.7,
          "tooltipText": "Risk-level - 0.7"
        },
        {
          "name": "Credit Suitability",
          "value": 0.5,
          "tooltipText": "Credit Suitability - 0.5"
        }
      ]
    },
    {
      "name": "Zhang YuFei",
      "series": [
        {
          "name": "Interest Matching",
          "value": 0.4,
          "tooltipText": "Interest Matching - 0.4"
        },
        {
          "name": "Risk-level",
          "value": 0.6,
          "tooltipText": "Risk-level - 0.6"
        },
        {
          "name": "Credit Suitability",
          "value": 0.6,
          "tooltipText": "Credit Suitability - 0.6"
        }
      ]
    }
  ]

  expand(id) {
    this.ideas[id]['expanded'] = !this.ideas[id]['expanded']
  }
  onSelect(event) {
    console.log(event)
  }
}