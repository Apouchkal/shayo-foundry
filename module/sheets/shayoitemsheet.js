export default class ShayoItemSheet extends ItemSheet{
    get template(){
        console.log(`Shayo | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/shayo-foundry/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }
}
