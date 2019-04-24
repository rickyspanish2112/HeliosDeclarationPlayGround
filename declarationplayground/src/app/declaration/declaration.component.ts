import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
  displayTypes: boolean;
  exporterParty: boolean;
  customCollapsedHeight = '40px';
  customExpandedHeight = '40px';
  pageTitle = 'Declaration Header';
  exporterTitle = 'Exporter';

  ngOnInit() {
  }

}
