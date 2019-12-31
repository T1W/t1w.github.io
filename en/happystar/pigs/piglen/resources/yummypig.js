function createyumpig() {
var object = new THREE.Object3D;

var yumsphere = new THREE.SphereGeometry(10, 64, 32);
var yumblue = new THREE.MeshLambertMaterial({color:0x0a9bb5});
var yummy = new THREE.Mesh(yumsphere, yumblue);
yummy.scale.y = 1.05;
object.add(yummy);

var nosphere = new THREE.SphereGeometry(1.8, 64, 32);
var yumlblue = new THREE.MeshLambertMaterial({color:0xc1e7ff});
var yumnose = new THREE.Mesh(nosphere, yumlblue);
yumnose.position.set(0, 2.5, 9.7);
yumnose.scale.x = 1.5;
yumnose.scale.z = 0.7;
yumnose.rotation.x = -Math.PI/180*20;
object.add(yumnose);

var eyesphere = new THREE.SphereGeometry(0.8,32,32);
var eyblack = new THREE.MeshPhongMaterial({color:0x111111,shininess:80});
var yeyel = new THREE.Mesh(eyesphere,eyblack);
yeyel.position.set(-1.5, 4.7, 8.8);
yeyel.scale.x = 0.6;
yeyel.scale.z = 0.4;
yeyel.rotation.x = -Math.PI/180*20;
object.add(yeyel);

var yeyer = yeyel.clone();
yeyer.position.x = 1.5;
object.add(yeyer);

var noosphere = new THREE.SphereGeometry(0.2, 32, 16);
var yumllblue = new THREE.MeshPhongMaterial({color:0xabbfff});
var noospart = new THREE.Mesh(noosphere, yumllblue);
noospart.position.set(-1.2, 2.8, 10.8);
noospart.scale.y = 2;
noospart.scale.z = 0.8;
noospart.rotation.x = -Math.PI/180*20;
object.add(noospart);

var nosepart = noospart.clone();
nosepart.position.x = 1.2;
object.add(nosepart);

var ttorus = new THREE.TorusGeometry(3,0.7,16,64);
var yumllllblue = new THREE.MeshPhongMaterial({color:0xd1ecff});
var ttorusa = new THREE.Mesh(ttorus, yumllllblue);
ttorusa.position.set(0, 1.2, 9);
ttorusa.scale.y = 0.4;
ttorusa.scale.z = 1.1;
ttorusa.rotation.x = Math.PI/180*120;
object.add(ttorusa);

var mtorus = new THREE.TorusGeometry(5, 1, 16, 64);
var mtorusa = new THREE.Mesh(mtorus, yumllllblue);
mtorusa.position.set(0, -1, 7.3);
mtorusa.scale.y = 0.5;
mtorusa.rotation.x = Math.PI/180*120;
object.add(mtorusa);

var btorus = new THREE.TorusGeometry(5, 0.9, 16, 64);
var btorusa = new THREE.Mesh(btorus, yumllllblue);
btorusa.rotation.x = Math.PI/180*120;
btorusa.scale.y = 0.5;
btorusa.position.set(0, -4, 6.3);
object.add(btorusa);

var acyl = new THREE.CylinderGeometry(1,1,3, 32,1);
var acyli = new THREE.Mesh(acyl, yumblue);
acyli.scale.z = 0.5;
acyli.position.set(-5,0,9);
acyli.rotation.x = Math.PI/180*140;
acyli.rotation.z = Math.PI/180*20;
acyli.rotation.y = Math.PI/180*40;
object.add(acyli);

var asph = new THREE.SphereGeometry(0.6, 32, 16);
var asphe = new THREE.Mesh(asph, yumlblue);
asphe.position.set(-0.3,1.8,-0.05);
asphe.scale.y = 1.2;
asphe.scale.z = 1;
asphe.rotation.z = Math.PI/180*50;
acyli.add(asphe);

var aspher = asphe.clone();
aspher.position.set(0.3,1.8,0.05);
aspher.rotation.z = -Math.PI/180*50;
acyli.add(aspher);

var acylin = acyli.clone();
acylin.position.x = 5;
acylin.rotation.y = -Math.PI/180*30;
acylin.rotation.x = Math.PI/180*140;
acylin.rotation.z= -Math.PI/180*20;
object.add(acylin);

var acir = new THREE.SphereGeometry(0.8,32,16);
var yumred = new THREE.MeshLambertMaterial({color:0xcc0000});
var acirc = new THREE.Mesh(acir, yumred);
acirc.position.set(0,1.9,-0.6);
acirc.scale.set(0.6,0.5,0.1);
acylin.add(acirc);

var lcyl = new THREE.CylinderGeometry(1.1,1.1,4,32,1);
var lcyli = new THREE.Mesh(lcyl,yumblue);
lcyli.position.set(-4,-9,5);
lcyli.scale.z = 0.7;
lcyli.rotation.x = -Math.PI/180*70;
lcyli.rotation.z = -Math.PI/180*20;

var lfc = new THREE.CylinderGeometry(1.1,1.1,1,32,1);
var lfcy = new THREE.Mesh(lfc,yumlblue);
lfcy.position.y = -2.5;

var lfs = new THREE.SphereGeometry(0.65,32,16);
var lfsp = new THREE.Mesh(lfs,yumlblue);
lfsp.scale.z = 2.7;
lfsp.position.set(-0.5,-0.6,0.6);
lfsp.rotation.x = Math.PI/180*10;
lfsp.rotation.y = -Math.PI/180*10;
lfcy.add(lfsp);

lfsph = lfsp.clone();
lfsph.position.x = 0.5;
lfsph.rotation.y = -Math.PI/180*350;
lfcy.add(lfsph);

lcyli.add(lfcy);

var lcylin = lcyli.clone();
lcylin.position.set(4,-9,5);
lcylin.rotation.z = Math.PI/180*20;
object.add(lcylin);

object.add(lcyli);

var ebox = new THREE.BoxGeometry(3.2,1.8,0.3);
var eboxy = new THREE.Mesh(ebox,yumblue);
eboxy.rotation.z = -Math.PI/180*25;
eboxy.position.set(4,8.6,5);

var eabo = new THREE.BoxGeometry(2.5,1.7,0.3);
var eabox = new THREE.Mesh(eabo,yumlblue);
eabox.position.set(0,0,0.1);
eboxy.add(eabox);

var eaboxy = eboxy.clone();
eaboxy.position.set(-4,8.6,5);
eaboxy.rotation.z = Math.PI/180*25;

var eco = new THREE.ConeGeometry(1.6,1.8,32);
var econ = new THREE.Mesh(eco,yumblue);
econ.scale.z = 0.1;
econ.position.set(0,1.8,0);

var eaco = new THREE.ConeGeometry(1.3,1.85,32);
var eacon = new THREE.Mesh(eaco,yumlblue);
eacon.position.set(0,-0.2,01);
eacon.rotation.x = -Math.PI/180*35;
eacon.scale.z = 0.1;
econ.add(eacon);

var econi = econ.clone();
econi.rotation.x = Math.PI/180*150;
econi.position.set(0,0.07,0.6);
eaboxy.add(econi);

eboxy.add(econ);

object.add(eaboxy);
object.add(eboxy);

var taicy = new THREE.CylinderGeometry(0.5,0.5,2);
var taicyl = new THREE.Mesh(taicy,yumblue);
taicyl.position.set(0,-9,-5);
taicyl.rotation.x = Math.PI/2;

var taitor = new THREE.TorusGeometry(0.7,0.5,16,64,Math.PI);
var taitoru = new THREE.Mesh(taitor,yumblue);
taitoru.rotation.z = Math.PI;
taitoru.position.set(-0.7,-0.8,0);
taicyl.add(taitoru);

var taisp = new THREE.SphereGeometry(0.5,32,16);
var taisph = new THREE.Mesh(taisp,yumblue);
taisph.position.set(-1.4,-1,0);
taicyl.add(taisph);

object.add(taicyl);

return object;
}