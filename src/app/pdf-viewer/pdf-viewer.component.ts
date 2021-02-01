import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import webViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements AfterViewInit {
  @ViewChild('viewer')viewerRef: ElementRef;

  constructor() { }
  
  ngAfterViewInit(): void {
    webViewer({
      path:'../../assets/lib',
      initialDoc:'../../assets/Rapport STI.pdf'
    }, this.viewerRef.nativeElement).then(instance => {

    })
  }

}
