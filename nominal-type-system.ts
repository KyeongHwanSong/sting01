type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
	return id as PersonID;
}

function gePersonById(id: PersonID) {}

gePersonById(PersonID('id-1928'));

//자주 사용안함
