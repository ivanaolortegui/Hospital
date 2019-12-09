import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  title: string;
  constructor(private route: Router,
    private mainTitle: Title,
    private meta: Meta) {
    this.getRouteData().subscribe(event => {
      this.title = event.title;
      this.mainTitle.setTitle(this.title);
      const metaDefinition: MetaDefinition = {
        name: 'Description',
        content: this.title,
      }
      this.meta.updateTag(metaDefinition);
    });
  }

  ngOnInit() {
  }

  getRouteData() {
    return this.route.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
