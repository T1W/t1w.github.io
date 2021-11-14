function createFLYPIG() {

var iacircle = new THREE.SphereGeometry(7, 64, 32);
var pink = new THREE.MeshLambertMaterial({color:0xfe3065, side:THREE.DoubleSide});
var iasphere = new THREE.Mesh(iacircle, pink);
iasphere.position.set(0, 0, 0);
scene.add(iasphere);

var icicircle = new THREE.SphereGeometry(4, 64, 320);
var lpink = new THREE.MeshLambertMaterial({color:0xff8a9a, side:THREE.DoubleSide});
var ilcircle = new THREE.Mesh(icicircle, lpink);
ilcircle.scale.z = 0.6;
ilcircle.position.set(0, -2, 5);
ilcircle.rotation.x = Math.PI/180*20;
iasphere.add(ilcircle);

var icircle = new THREE.SphereGeometry(2.5, 64, 32);
var oran = new THREE.MeshLambertMaterial({color:0xffefe0});
var liscircle = new THREE.Mesh(icircle, oran);
liscircle.scale.y = 0.5;
liscircle.position.set(0, 0.7, 6);
iasphere.add(liscircle);

var licircle = new THREE.SphereGeometry(0.4, 64, 32);
var black = new THREE.MeshLambertMaterial({color:0x000000});
var isicircle = new THREE.Mesh(licircle, black);
isicircle.position.set(-1, 01, 8);
iasphere.add(isicircle);

var licircles = new THREE.SphereGeometry(0.4, 64, 32);
var isicircles = new THREE.Mesh(licircles, black);
isicircles.position.set(1, 1, 8);
iasphere.add(isicircles);

var icircles = new THREE.SphereGeometry(0.55, 64, 32);
var ablack = new THREE.MeshPhongMaterial({color:0x000000, shininess:200});
var icscircles = new THREE.Mesh(icircles, ablack);
icscircles.position.set(-2, 2, 6);
iasphere.add(icscircles);

var iicircle = new THREE.SphereGeometry(0.55, 64, 32);
var icsiscircle = new THREE.Mesh(iicircle, ablack);
icsiscircle.position.set(2, 2, 6);
iasphere.add(icsiscircle); 

var iarectangle = new THREE.CylinderGeometry(0.7, 0.7, 2.5, 32, 1);
var ilacylinder = new THREE.Mesh(iarectangle, lpink);
ilacylinder.rotation.x = Math.PI/180*300;
ilacylinder.rotation.z = Math.PI/180*340;
ilacylinder.position.set(-2.5, -5.5, 5.5);
iasphere.add(ilacylinder);

var igrectangle = new THREE.CylinderGeometry(0.7, 0.7, 0.5, 32, 1);
var gray = new THREE.MeshLambertMaterial({color:0x414141});
var igsicylinder = new THREE.Mesh(igrectangle, gray);
igsicylinder.rotation.x = Math.PI/180*300;
igsicylinder.rotation.z = Math.PI/180*340;
igsicylinder.position.set(-3, -6.2, 6.5);
iasphere.add(igsicylinder);

var igcircle = new THREE.SphereGeometry(0.7, 64, 32);
var igcisicircle = new THREE.Mesh(igcircle, gray);
igcisicircle.position.set(-3, -6.2, 6.7);
iasphere.add(igcisicircle);

var illiscylinder = new THREE.Mesh(iarectangle, lpink);
illiscylinder.rotation.x = Math.PI/180*300;
illiscylinder.rotation.z = Math.PI/180*20;
illiscylinder.position.set(2.5, -5.5, 5.5);
iasphere.add(illiscylinder);

var igicscylinder = new THREE.Mesh(igrectangle, gray);
igicscylinder.rotation.x = Math.PI/180*300;
igicscylinder.rotation.z = Math.PI/180*20;
igicscylinder.position.set(3, -6.2, 6.5);
iasphere.add(igicscylinder);

var igiscsiscircle = new THREE.Mesh(igcircle, gray);
igiscsiscircle.position.set(3, -6.2, 6.7);
iasphere.add(igiscsiscircle);

var ilcsiscylinder = ilacylinder.clone();
ilcsiscylinder.position.set(-3, -1, 7.5);
iasphere.add(ilcsiscylinder);

var igisciscylinder = igsicylinder.clone();
igisciscylinder.position.set(-3.5, -1.7, 8.5);
iasphere.add(igisciscylinder);

var igicsicsicircle = igcisicircle.clone();
igicsicsicircle.position.set(-3.5, -1.7, 8.7);
iasphere.add(igicsicsicircle);

var iliscicscylinder = illiscylinder.clone();
iliscicscylinder.position.set(3, -1, 7.5);
iasphere.add(iliscicscylinder);

var igicsicscylinder = igicscylinder.clone();
igicsicscylinder.position.set(3.5, -1.7, 8.5);
iasphere.add(igicsicscylinder);

var igisicicicicircle = igiscsiscircle.clone();
igisicicicicircle.position.set(3.5, -1.7, 8.7);
iasphere.add(igisicicicicircle);

var iclcircle = new THREE.SphereGeometry(2, 64, 32, 0, Math.PI);
var icslicicsiscircle = new THREE.Mesh(iclcircle, lpink);
icslicicsiscircle.scale.y = 1.5;
icslicicsiscircle.scale.x = 0.9;
icslicicsiscircle.rotation.x = Math.PI;
icslicicsiscircle.rotation.z = Math.PI/180*350;
icslicicsiscircle.position.set(-3, 5.2, 2);
iasphere.add(icslicicsiscircle);

var ilcircle = new THREE.SphereGeometry(1.5, 64, 32, 0, Math.PI);
var circlecirclecircle = new THREE.Mesh(ilcircle, pink);
circlecirclecircle.scale.y = 1.5;
circlecirclecircle.scale.x = 0.9;
circlecirclecircle.rotation.x = Math.PI;
circlecirclecircle.rotation.z = Math.PI/180*350;
circlecirclecircle.position.set(-3, 5.2, 2.3);
iasphere.add(circlecirclecircle);

var itorus = new THREE.TorusGeometry(2, 0.3, 16, 100);
var itorustorusestorus = new THREE.Mesh(itorus, lpink);
itorustorusestorus.scale.y = 1.5;
itorustorusestorus.scale.x = 0.8;
itorustorusestorus.rotation.x = Math.PI;
itorustorusestorus.rotation.z = Math.PI/180*350;
itorustorusestorus.position.set(-2.9, 4.7, 2.05);
iasphere.add(itorustorusestorus);

var icirclescicircles = icslicicsiscircle.clone();
icirclescicircles.rotation.z = Math.PI/180*10;
icirclescicircles.position.set(3, 5.2, 2);
iasphere.add(icirclescicircles);

var iciciciciscircles = circlecirclecircle.clone();
iciciciciscircles.rotation.z = Math.PI/180*10;
iciciciciscircles.position.set(3, 5.2, 2.3);
iasphere.add(iciciciciscircles);

var itorustorustorus = itorustorusestorus.clone();
itorustorustorus.rotation.z = Math.PI/180*10;
itorustorustorus.position.set(2.9, 4.7, 2.05);
iasphere.add(itorustorustorus);

var iatorus = new THREE.TorusGeometry(1, 0.5, 16, 100, 4);
var ililtailliitorus = new THREE.Mesh(iatorus, pink);
ililtailliitorus.position.set(0, -5, -5);
ililtailliitorus.rotation.x = Math.PI/2;
ililtailliitorus.rotation.z = Math.PI/180*80;
iasphere.add(ililtailliitorus);

var ialcircle = new THREE.SphereGeometry(0.5, 64, 32);
var ilcicisiscircle = new THREE.Mesh(ialcircle, pink);
ilcicisiscircle.position.set(0.8, -5, -5.7);
iasphere.add(ilcicisiscircle);

var iinccircle = new THREE.SphereGeometry(1.7, 64, 32, 0, Math.PI)
var lgray = new THREE.MeshLambertMaterial({color:0xededed, side:THREE.DoubleSide});
var iliscicicircles = new THREE.Mesh(iinccircle, lgray);
iliscicicircles.scale.y = 0.3;
iliscicicircles.scale.z = 1.2;
iliscicicircles.position.set(-7, 1, 0);
iliscicicircles.rotation.z = Math.PI/2;
iliscicicircles.rotation.x = Math.PI/180*20;
iasphere.add(iliscicicircles);

var inrectangle = new THREE.CylinderGeometry(0.7, 0.7, 1, 32, 1)
var iliscicylinder = new THREE.Mesh(inrectangle, lgray);
iliscicylinder.scale.x = 0.7;
iliscicylinder.position.set(-7, 2, 0.1);
iliscicylinder.rotation.z = 0;
iliscicylinder.rotation.x = Math.PI/180*110;
iasphere.add(iliscicylinder);

var inlrectangle = new THREE.CylinderGeometry(0.7, 0.7, 1.5, 32, 1);
var ilicsicylinder = new THREE.Mesh(inlrectangle, lgray);
ilicsicylinder.scale.x = 0.7;
ilicsicylinder.position.set(-7, 1.2, -0.5);
ilicsicylinder.rotation.x = Math.PI/180*110;
iasphere.add(ilicsicylinder);

var insrectangle = new THREE.CylinderGeometry(0.7, 0.7, 2, 32, 1);
var icslicylinder = new THREE.Mesh(insrectangle, lgray);
icslicylinder.scale.x = 0.7;
icslicylinder.position.set(-7, 0.3, -1);
icslicylinder.rotation.x = Math.PI/180*110;
iasphere.add(icslicylinder);

var inscircle = new THREE.SphereGeometry(0.7, 64, 32);
var ilscliscircle = new THREE.Mesh(inscircle, lgray);
ilscliscircle.scale.x = 0.7;
ilscliscircle.position.set(-7, 2.07, -0.1);
iasphere.add(ilscliscircle);

var icsilicircle = ilscliscircle.clone();
icsilicircle.position.set(-7, 1.4, -0.9);
iasphere.add(icsilicircle);

var iscilicircle = icsilicircle.clone();
iscilicircle.position.set(-7, 0.57, -1.7);
iasphere.add(iscilicircle);

var illiscircle = iliscicicircles.clone();
illiscircle.position.set(7, 1, 0);
iasphere.add(illiscircle);

var icicylinder = iliscicylinder.clone();
icicylinder.position.set(7, 2, 0.1);
iasphere.add(icicylinder);

var lscylinder = ilicsicylinder.clone();
lscylinder.position.set(7, 1.2, -0.5)
iasphere.add(lscylinder);

var licylinder = icslicylinder.clone();
licylinder.position.set(7, 0.3, -1);
iasphere.add(licylinder);

var icscircle = ilscliscircle.clone();
icscircle.position.set(7, 2.07, -0.1);
iasphere.add(icscircle);

var lcscircle = icsilicircle.clone();
lcscircle.position.set(7, 1.4, -0.9);
iasphere.add(lcscircle);

var lscircle = icsilicircle.clone();
lscircle.position.set(7, 0.57, -1.7);
iasphere.add(lscircle);

return iasphere;
}