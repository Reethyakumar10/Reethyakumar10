var names=new Array();
names[0]="Yaakov";
names[1]="Johan";
names[2]="Jeremy";
names[3]="Paula";
names[4]="Archie";
names[5]="Fiona";
names[6]="Jacob";
names[7]="Johnny";
names[8]="laila";
names[9]="Jenny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}