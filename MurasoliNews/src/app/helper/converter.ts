export class Converter {
    value: string = '';
    convert(name: string): string {
        switch (name) {
            case 'MONDAY':
                this.value = 'திங்கட்கிழமை';
                break;
            case 'TUESDAY':
                this.value = 'செவ்வாய் கிழமை';
                break;
            case 'WEDNESDAY':
                this.value = 'புதன் கிழமை';
                break;
            case 'THURSDAY':
                this.value = 'வியாழக்கிழமை';
                break;
            case 'FRIDAY':
                this.value = 'வெள்ளிக்கிழமை';
                break;
            case 'SATURDAY':
                this.value = 'சனிக்கிழமை';
                break;
            case 'SUNDAY':
                this.value = 'ஞாயிற்றுக்கிழமை';
                break;
        }
        return this.value;
    }

    convertMonth(value: string): string {
        switch (value) {
            case 'JAN':
                this.value = 'ஜனவரி';
                break;
            case 'FEB':
                this.value = 'பிப்ரவரி';
                break;
            case 'MAR':
                this.value = 'மார்ச்';
                break;
            case 'APR':
                this.value = 'ஏப்ரல்';
                break;
            case 'MAY':
                this.value = 'மே';
                break;
            case 'JUN':
                this.value = 'ஜூன்';
                break;
            case 'JUL':
                this.value = 'ஜூலை';
                break;
            case 'AUG':
                this.value = 'ஆகஸ்ட்';
                break;
            case 'SEP':
                this.value = 'செப்டம்பர்';
                break;
            case 'OCT':
                this.value = 'அக்டோபர்';
                break;
            case 'NOV':
                this.value = 'நவம்பர்';
                break;
            case 'DEC':
                this.value = 'டிசம்பர்';
                break;
        }
        return this.value;
    }
}