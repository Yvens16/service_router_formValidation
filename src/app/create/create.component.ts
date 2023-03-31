import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { PokemonType } from 'src/types/interface';


// interface ISkill  {
//   name: string,
//   logo: string,
//   site: string,
// };
interface IDeveloper {
  name: string;
  // ....,
  skills: {name: string,logo: string,site: string,}[]; // ou utuliser une interface ISkill[]
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  pokeForm = this.formBuilder.group({
    name: [''],
    type: new FormControl('', { validators: [onlyGoodTypesValidator], updateOn: 'submit' })
  }, { validators: Validators.required })

  constructor(private pokemonService: DataService, private formBuilder: FormBuilder) {
    // this.pokeForm.setValidators([Validators.required]);
  }

  ngOnInit(): void { }

  addPokemon(): void {

    // if (this.pokeForm.value.type!.length && this.pokeForm.value.name!.length) {

    /// ########################
    if (this.pokeForm.valid) {
      this.pokemonService.addPokemon(this.pokeForm.value.name!, this.pokeForm.value.type as unknown as PokemonType);
      // console.log('Form is valid');
      this.pokeForm.reset();
    } else {
      // console.log('Form is not valid');
    }
    /// ########################

    // } else {
    //   console.log("Un input n'est pas rempli");
    // }

  };

  get type() {
    return this.pokeForm.get('type');
  }

}


function onlyGoodTypesValidator(input: AbstractControl): ValidationErrors | null {
  if (input.dirty) {
    const pokemonTypes: PokemonType[] = ["fire", "water", "grass", "electric"];
    if (!pokemonTypes.includes(input.value)) {
      console.log("pas good")
      return { forbiddenType: { value: input.value } };
    } else {
      console.log("good")
      return null;
    }
  }
  return null
}
