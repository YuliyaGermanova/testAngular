import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertBool'
})
export class ConvertBoolPipe implements PipeTransform {

    transform(condition: boolean) : string {
        if(condition == true)
        {
            return 'Да';
        }
        return 'Нет';
    }

}