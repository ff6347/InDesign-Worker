
function isPlacedOnMasterSpread (item) {

	while (!(item instanceof Application)) {
		
		if (item instanceof MasterSpread) return true;
		item = item.parent;
		
	}

	return false;

}
