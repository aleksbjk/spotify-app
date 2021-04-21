import { Component, OnInit } from '@angular/core';
import { NewReleasesService } from 'src/app/services/new-releases.service';

import { NewReleasesItem } from '../../interfaces/new-releases';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.sass']
})
export class NewReleasesComponent implements OnInit {

  public newReleases: NewReleasesItem[] = []

  constructor(private newReleasesService: NewReleasesService) { }

  ngOnInit(): void {
    this.getNewReleases();
  }

    public getNewReleases() {
      this.newReleasesService.getNewReleases().subscribe((data: any) => {
        this.newReleases = data;
        console.log('New Releases:', data);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    }  

}
