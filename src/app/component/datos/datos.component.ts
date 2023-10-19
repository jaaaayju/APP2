import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from 'src/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  PunguinosList: any[]=[];
  constructor(private SVC:ServicioService, private router:Router){
    this.SVC.get().subscribe((result:any)=>{
      this.PunguinosList=result

    })

  }
  Detalle(Id:String){
    this.router.navigate(['Id',Id]);
    console.log(Id)
  }

}
