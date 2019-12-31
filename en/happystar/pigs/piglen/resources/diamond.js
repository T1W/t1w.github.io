function creatediamond(image) {

	var glass = new THREE.TextureLoader().load(image);
	glass.mapping= THREE.SphericalReflectionMapping;

	var diamonds = new THREE.MeshPhongMaterial({color:0xFFFFFF, transparent:true, opacity:1, shading:THREE.FlatShading,                        envMap:glass, reflectivity:1});
	var diamond = new THREE.CylinderGeometry( 10, 18, 8, 17 );
	var diamonddiamond = new THREE.Mesh (diamond, diamonds);

	var bigdiamond = new THREE.CylinderGeometry(18, 0, 16, 17);
	var diamonddiamonddiamond = new THREE.Mesh (bigdiamond, diamonds);
	diamonddiamonddiamond.position.y = -12;

	var thediamond = new THREE.Object3D();
	thediamond.add(diamonddiamond, diamonddiamonddiamond);
	return thediamond;
}