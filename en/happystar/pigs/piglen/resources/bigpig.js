function threePig() {

var bigpig = new THREE.Object3D();

var acircle = new THREE.SphereGeometry(10, 64, 32);
var amaterial = new THREE.MeshLambertMaterial({color:0xffc9da});
var asphere = new THREE.Mesh(acircle, amaterial);
asphere.position.set(0, 0, 0);
bigpig.add(asphere);

var circle = new THREE.SphereGeometry(2.8, 64, 32);
var material = new THREE.MeshLambertMaterial({color:0xeeeeee});
var sphere = new THREE.Mesh(circle, material);
sphere.scale.y = 0.55;
sphere.position.set(0, 2, 9.5);
bigpig.add(sphere);

var wcircle = new THREE.SphereGeometry(5.5, 64, 32);
var wmaterial = new THREE.MeshLambertMaterial({color:0xeeeeee});
var wsphere = new THREE.Mesh(wcircle, wmaterial);
wsphere.scale.z = 0.7;
wsphere.rotation.x = Math.PI/180*20;
wsphere.position.set(0, -3, 7);
bigpig.add(wsphere); 

var circles = new THREE.SphereGeometry(0.7, 64, 32);
var materials = new THREE.MeshLambertMaterial({color:0x202020});
var spheres = new THREE.Mesh(circles, materials);
spheres.position.set(-3, 4, 8.5);
bigpig.add(spheres); 

var scircles = new THREE.SphereGeometry(0.3, 54, 32);
var smaterials = new THREE.MeshLambertMaterial({color:0xffffff});
var sspheres = new THREE.Mesh(scircles, smaterials);
sspheres.position.set(-2.9, 4.3, 9);
bigpig.add(sspheres);

var scircle = new THREE.SphereGeometry(0.7, 64, 32);
var smaterial = new THREE.MeshLambertMaterial({color:0x202020});
var ssphere = new THREE.Mesh(scircle, smaterial);
ssphere.position.set(3, 4, 8.5);
bigpig.add(ssphere); 

var soircle = new THREE.SphereGeometry(0.3, 54, 32);
var soaterials = new THREE.MeshLambertMaterial({color:0xffffff});
var sopheres = new THREE.Mesh(soircle, soaterials);
sopheres.position.set(2.9, 4.3, 9);
bigpig.add(sopheres);

var rectangle = new THREE.BoxGeometry(0.1, 1, 1);
var rmaterial = new THREE.MeshLambertMaterial({color:0x111111});
var rprism = new THREE.Mesh(rectangle, rmaterial);
rprism.rotation.x = Math.PI/180*320;
rprism.position.set(1, 2.4, 11.45);
bigpig.add(rprism);

var rectangles = new THREE.BoxGeometry(0.1, 1, 1);
var rmaterials = new THREE.MeshLambertMaterial({color:0x111111});
var rprisms = new THREE.Mesh(rectangles, rmaterials);
rprisms.rotation.x = Math.PI/180*320;
rprisms.position.set(-1, 2.4, 11.45);
bigpig.add(rprisms); 

var arectangle = new THREE.CylinderGeometry(0.7, 1, 2, 32, 1);
var armaterial = new THREE.MeshLambertMaterial({color:0xffc9da});
var acylinder = new THREE.Mesh(arectangle, armaterial);
acylinder.scale.z = 0.7;
acylinder.rotation.x = Math.PI/180*300;
acylinder.rotation.z = Math.PI/180*20;
acylinder.position.set(2.5, -7, 9.3);
bigpig.add(acylinder);

var grectangle = new THREE.CylinderGeometry(1, 1.3, 1, 32, 1);
var gmaterial = new THREE.MeshLambertMaterial({color:0x555555});
var gcylinder = new THREE.Mesh(grectangle, gmaterial);
gcylinder.scale.z = 0.7;
gcylinder.rotation.x = Math.PI/180*300;
gcylinder.rotation.z = Math.PI/180*20;
gcylinder.position.set(3, -7.7, 10.6);
bigpig.add(gcylinder);

var gcircle = new THREE.SphereGeometry(1.2, 64, 32);
var gcmaterial = new THREE.MeshLambertMaterial({color:0x555555});
var gcsphere = new THREE.Mesh(gcircle, gcmaterial);
gcsphere.scale.x = 0.5;
gcsphere.scale.y = 0.5;
gcsphere.rotation.x = Math.PI/180*120;
gcsphere.rotation.z = Math.PI/180*20;
gcsphere.position.set(2.7, -7.5, 11.2);
bigpig.add(gcsphere);

var gcircles = new THREE.SphereGeometry(1.2, 64, 32);
var gcmaterials = new THREE.MeshLambertMaterial({color:0x555555});
var gcspheres = new THREE.Mesh(gcircles, gcmaterials);
gcspheres.scale.x = 0.5;
gcspheres.scale.y = 0.5;
gcspheres.rotation.x = Math.PI/180*125;
gcspheres.rotation.z = Math.PI/180*30;
gcspheres.position.set(3.7, -7.5, 11);
bigpig.add(gcspheres);

var aarectangle = new THREE.CylinderGeometry(0.7, 1, 2, 32, 1);
var aarmaterial = new THREE.MeshLambertMaterial({color:0xffc9da});
var aacylinder = new THREE.Mesh(aarectangle, aarmaterial);
aacylinder.scale.z = 0.7;
aacylinder.rotation.x = Math.PI/180*300;
aacylinder.rotation.z = Math.PI/180*340;
aacylinder.position.set(-2.5, -7, 9.3);
bigpig.add(aacylinder);

var ggrectangle = new THREE.CylinderGeometry(1, 1.3, 1, 32, 1);
var ggmaterial = new THREE.MeshLambertMaterial({color:0x555555});
var ggcylinder = new THREE.Mesh(ggrectangle, ggmaterial);
ggcylinder.scale.z = 0.7;
ggcylinder.rotation.x = Math.PI/180*300;
ggcylinder.rotation.z = Math.PI/180*340;
ggcylinder.position.set(-3, -7.7, 10.6);
bigpig.add(ggcylinder);

var goval = new THREE.SphereGeometry(1.2, 64, 32);
var gomaterial = new THREE.MeshLambertMaterial({color:0x555555});
var gosphere = new THREE.Mesh(goval, gomaterial);
gosphere.scale.x = 0.5;
gosphere.scale.y = 0.5;
gosphere.rotation.x = Math.PI/180*120;
gosphere.rotation.z = Math.PI/180*340;
gosphere.position.set(-2.5, -7.5, 11.5);
bigpig.add(gosphere);

var govals = new THREE.SphereGeometry(1.2, 64, 32);
var gomaterials = new THREE.MeshLambertMaterial({color:0x555555});
var gospheres = new THREE.Mesh(govals, gomaterials);
gospheres.scale.x = 0.5;
gospheres.scale.y = 0.5;
gospheres.rotation.x = Math.PI/180*125;
gospheres.rotation.z = Math.PI/180*330;
gospheres.position.set(-3.6, -7.5, 10.8);
bigpig.add(gospheres);

var srectangle = new THREE.CylinderGeometry(1, 1, 2, 32, 1);
var smaterial = new THREE.MeshLambertMaterial({color:0xffc9da});
var scylinder = new THREE.Mesh(srectangle, smaterial);
scylinder.scale.z = 0.5;
scylinder.rotation.x = Math.PI/180*280;
scylinder.rotation.z = Math.PI/180*30;
scylinder.rotation.y = Math.PI/180*20;
scylinder.position.set(3.5, 0, 10);
bigpig.add(scylinder);

var cvoas = new THREE.SphereGeometry(1, 64, 32);
var cmaterials = new THREE.MeshLambertMaterial({color:0x555555});
var cspheres = new THREE.Mesh(cvoas, cmaterials);
cspheres.scale.z = 0.4;
cspheres.scale.x = 0.5;
cspheres.rotation.x = Math.PI/180*280;
cspheres.rotation.z = Math.PI/180*30;
cspheres.rotation.y = Math.PI/180*20;
cspheres.position.set(3.9, -0.2, 10.7);
bigpig.add(cspheres);

var csphere = cspheres.clone();
csphere.position.set(3.5, -0.1, 10.7);
bigpig.add(csphere);

var srectangles = new THREE.CylinderGeometry(1, 1, 2, 32, 1);
var smaterials = new THREE.MeshLambertMaterial({color:0xffc9da});
var scylinders = new THREE.Mesh(srectangles, smaterials);
scylinders.scale.z= 0.5;
scylinders.rotation.x = Math.PI/180*280;
scylinders.rotation.z = Math.PI/180*330;
scylinders.rotation.y = Math.PI/180*340;
scylinders.position.set(-3.5, 0, 10);
bigpig.add(scylinders);

var ccoval = new THREE.SphereGeometry(1, 64, 32);
var cmaterial = new THREE.MeshLambertMaterial({color:0x555555});
var escpheres = new THREE.Mesh(ccoval, cmaterial);
escpheres.scale.z = 0.4;
escpheres.scale.x = 0.5;
escpheres.rotation.x = Math.PI/180*280;
escpheres.rotation.z = Math.PI/180*330;
escpheres.rotation.y = Math.PI/180*340;
escpheres.position.set(-3.9, -0.2, 10.7);
bigpig.add(escpheres);

var ecspheres = escpheres.clone();
escpheres.position.set(-3.5, -0.1, 10.7);
bigpig.add(ecspheres);

var eerectangle = new THREE.CylinderGeometry(2, 2, 2, 32, 1);
var eematerial = new THREE.MeshLambertMaterial({color:0xffc9da});
var ear = new THREE.Mesh(eerectangle, eematerial);
ear.scale.z = 0.2;
ear.position.set(-4, 7, 6);
ear.rotation.x = Math.PI/180*240;
ear.rotation.z = Math.PI/180*10;
ear.rotation.y = Math.PI/180*330;
bigpig.add(ear);

var eetriangle = new THREE.ConeGeometry(2, 2, 32);
var etmaterial = new THREE.MeshLambertMaterial({color:0xffbcda});
var ears = new THREE.Mesh(eetriangle, etmaterial);
ears.scale.z = 0.2;
ears.scale.x = 0.9;
ears.scale.y = 1;
ears.rotation.x = Math.PI/180*90;
ears.rotation.z = Math.PI/180*340;
ears.rotation.y = Math.PI/180*20;
ears.position.set(-3.5, 7.6, 7.8);
bigpig.add(ears);

var anear = ear.clone();
anear.position.set(4, 7, 6);
anear.rotation.y = Math.PI/180*20;
bigpig.add(anear);

var near = ears.clone();
near.position.set(4.2, 7.7, 7.9);
near.rotation.y = Math.PI/180*335;
near.rotation.x = Math.PI/180*60;
near.rotation.z = Math.PI/180*350;
bigpig.add(near);

var t = new THREE.CylinderGeometry(0.5, 0.5, 3, 32, 1);
var a = new THREE.MeshLambertMaterial({color:0xffc9da});
var i = new THREE.Mesh(t, a);
i.position.set(0, -6, -9);
i.rotation.x = Math.PI/2;
bigpig.add(i);

var l = new THREE.TorusGeometry(1, 0.5, 16, 100, Math.PI);
var ta = new THREE.MeshLambertMaterial({color:0xffc9da});
var il = new THREE.Mesh(l, ta);
il.position.set(1, -6, -10.5);
il.rotation.x = Math.PI/180*270;
bigpig.add(il);

var tai = new THREE.SphereGeometry(0.5, 64, 32);
var tail = new THREE.Mesh(tai, a);
tail.position.set(2, -6, -10.5);
bigpig.add(tail);

return bigpig;
}