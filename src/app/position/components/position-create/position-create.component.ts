import { Router } from '@angular/router';
import { PositionService } from 'shared/services/position.service';
import { Component, OnInit } from '@angular/core';
import { Position } from 'shared/models/position';

@Component({
  selector: 'app-positioncreate',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.css']
})
export class PositionCreateComponent implements OnInit {
  position = {};

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.positionService.create(this.position)
      .then(() => this.router.navigateByUrl('/dashboard'));
  }
}
