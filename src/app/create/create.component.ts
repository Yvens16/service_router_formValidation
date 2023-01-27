import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';
import { PokemonType } from 'src/types/interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {



  // <>
  // emailFormControl = new FormControl('', {
  //   validators: [Validators.required, Validators.email],
  //   updateOn: 'submit'
  // });
  form = this.formBuilder.group({
    name: [''],
    type: new FormControl('', {validators: [onlyGoodTypesValidator], updateOn: 'submit'})
  })

  constructor(private pokemonService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  addPokemon(): void {
    this.pokemonService.addPokemon(this.form.value.name!, this.form.value.type as unknown as PokemonType);
    this.form.reset();
  };

  // export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (input: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(input.value);
  //     return forbidden ? {forbiddenName: {value: input.value}} : null;
  //   };
  // }

}


function onlyGoodTypesValidator(input: AbstractControl): ValidationErrors | null {

  const pokemonTypes: PokemonType[] = ["fire" , "water" , "grass" , "electric"];
  console.log('input.value:', input.value)
  if (!pokemonTypes.includes(input.value)) {
  console.log("pas good")
    return {forbiddenType: {value: input.value}};
  } else {
    console.log("good")
    return null;
  }
}
