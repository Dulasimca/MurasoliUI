export class Converter {
    day: string = '';
    convert(name: string): string {
        switch(name) {
            case 'MONDAY':
              this.day = 'திங்கட்கிழமை';
              break;
            case 'TUESDAY':
              this.day = 'செவ்வாய் கிழமை';
              break;
            case 'WEDNESDAY':
              this.day = 'புதன் கிழமை';
              break;
            case 'THURSDAY':
              this.day = 'வியாழக்கிழமை';
              break;
            case 'FRIDAY':
              this.day = 'வெள்ளிக்கிழமை';
              break;
            case 'SATURDAY':
              this.day = 'சனிக்கிழமை';
              break;
            case 'SUNDAY':
              this.day = 'ஞாயிற்றுக்கிழமை';
              break;
          }
          return this.day;
    }
}