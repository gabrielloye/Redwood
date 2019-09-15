import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  setLabelFormatting(label) {
    let ref = {
      "US Equity": 47.7,
      "Intl Equities": 25.5,
      "Commodities": 16.6,
      "Corporate Bonds": 6.4,
      "Cash": 3.8
    }
    return label + " " + String(ref[label]) + "%"
  }

  usFormatting(label) {
    let ref = {
      "Small Cap": 21.4,
      "Tech": 32.1,
      "Staples": 19.8,
      "Healthcare": 26.7
    }
    return label + " " + String(ref[label]) + "%"
  }

  countryFormatting(label) { 
    let ref = {
      "USA": 48.5,
      "UK": 26.8,
      "Switzerland": 14.0,
      "France": 6.4,
      "Germany": 4.3
    }
    return label + " " + String(ref[label]) + "%"
  }

  currencyFormatting(label) { 
    let ref = {
      "USD": 46.5,
      "GBP": 30.8,
      "CHF": 16.0,
      "EUR": 6.7,
    }
    return label + " " + String(ref[label]) + "%"
  }

  hidden: Boolean = false;
  selectedRowIndex: number = 0;
  selectedPerson: string;

  constructor() { }
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ["name", "value", "performance"];

  ngOnInit() {
    this.dataSource.data = this.tableData
    this.selectedPerson = this.tableData[0]["name"]
  }
  onSelect(event) {
    console.log(event);
  }

  expand(event) {
    this.hidden = !this.hidden
  }

  highlightRow(row) {
    this.selectedRowIndex = row.id;
    this.selectedPerson = row.name;
  }

  countryData = [{
      "name": "USA",
      "value": 380000000
    },
    {
      "name": "UK",
      "value": 210000000  
    },
    {
      "name": "Switzerland",
      "value": 110000000
    },
    {
      "name": "France",
      "value": 50000000
    },
    {
      "name": "Germany",
      "value": 34000000
    }]
  currencyData = [{
      "name": "USD",
      "value": 330000000
    },
    {
      "name": "GBP",
      "value": 250000000  
    },
    {
      "name": "CHF",
      "value": 150000000
    },
    {
      "name": "EUR",
      "value": 50000000
    }]

  tableData = [
    {
      "id": 0,
      "name": "Anthony Green",
      "value": 220000000,
      "performance": 12.2
    },
    {
      "id": 1,
      "name": "Jane Johnson",
      "value": 380000000,
      "performance": 10.5
    },
    {
      "id": 2,
      "name": "Zhang YuFei",
      "value": 150000000,
      "performance": 14.0
    }
  ]
  asset = [
    {
      "name": "US Equity",
      "value": 3740000
    },
    {
      "name": "Intl Equities",
      "value": 2000000
    },
    {
      "name": "Commodities",
      "value": 1300000
    },
    {
      "name": "Corporate Bonds",
      "value": 500000
    },
    {
      "name": "Cash",
      "value": 300000
    }
  ]

  usEquity = [
    {
      "name": "Healthcare",
      "value": 1000000
    },
    {
      "name": "Small Cap",
      "value": 800000
    },
    {
      "name": "Tech",
      "value": 1200000
    },
    {
      "name": "Staples",
      "value": 740000
    }
  ]

}