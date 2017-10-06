import { Component } from '@angular/core';

@Component({
	selector:'fruta',
	templateUrl:'./fruta.component.html'
})
export class FrutaComponent {
	public nombre_componente='Componente de fruta';
	public listado_frutas='Naranja, Manzana, Pera, Sandia';
	
	public nombre:string;
	public edad:number;
	public trabajos:Array<string>=['algoce','secre','servicio'];
	public trabajos2:Array<any>=['algoce',12,true,'algomas'];
	comodin:any;
	
	constructor(){
		this.nombre='lu';
		this.edad=25;
		this.comodin=true;
	}
	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad();
		console.log(this.nombre+" "+this.edad);
	}
	cambiarNombre(){
		this.nombre='sofia';
	}
	cambiarEdad(){
		this.edad=18;
	}
}
