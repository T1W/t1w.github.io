function createNEWPIG() {
var hcircle = new THREE.SphereGeometry(10, 64, 32, 0, Math.PI);
var lpink = new THREE.MeshLambertMaterial({color:0xffc9da, side:THREE.DoubleSide});
var ihsphere = new THREE.Mesh(hcircle, lpink);
ihsphere.rotation.x = -Math.PI/2;
ihsphere.scale.z = 1.05;

var voval = new THREE.SphereGeometry(10, 64, 32);
var ivsphere = new THREE.Mesh(voval, lpink);
ivsphere.scale.z = 0.55;
ivsphere.position.set(0, 0, 0);
ihsphere.add(ivsphere);

var circtangle = new THREE.CylinderGeometry(2.3, 2.1, 1.5, 32, 1);
var www = new THREE.MeshLambertMaterial({color:0xf4cad0,side:THREE.DoubleSide});
var incylinder = new THREE.Mesh(circtangle, lpink);
incylinder.scale.z = 0.6;
incylinder.rotation.x = Math.PI/180*25;
incylinder.position.set(0, -9.2, -2);
ihsphere.add(incylinder);

var ocircle = new THREE.SphereGeometry(0.3, 64, 32);
var orsp = new THREE.MeshPhongMaterial({color:0xffd0c0});
var insphere = new THREE.Mesh(ocircle, orsp);
insphere.position.set(-0.7, -9.8, -2.2);
ihsphere.add(insphere);

var inspheres = new THREE.Mesh(ocircle, orsp);
inspheres.position.set(0.7, -9.8, -2.2);
ihsphere.add(inspheres);

var moval = new THREE.SphereGeometry(0.7, 64, 32);
var rpurple = new THREE.MeshLambertMaterial({color:0xfa0055,side:THREE.DoubleSide});
var imsphere = new THREE.Mesh(moval, rpurple);
imsphere.scale.y = 0.5;
imsphere.rotation.x = Math.PI/180*35;
imsphere.position.set(0.8, -8.2, -2.7);
imsphere.scale.z = 1.5;
ihsphere.add(imsphere);

var eoval = new THREE.SphereGeometry(0.9, 64, 32);
var wwh = new THREE.MeshPhongMaterial({color:0xffffff, shininess:20});
var iesphere = new THREE.Mesh(eoval, wwh);
iesphere.scale.z = 1.5;
iesphere.scale.y = 0.4;
iesphere.rotation.z = Math.PI/180*345;
iesphere.position.set(-3, -9.3, 0.5);
ihsphere.add(iesphere);

var eobval = new THREE.SphereGeometry(0.7, 64, 32);
var nbl = new THREE.MeshPhongMaterial({color:0x000099, shininess:20, side:THREE.DoubleSide});
var iensphere = new THREE.Mesh(eobval, nbl);
iensphere.scale.z = 1.5;
iensphere.scale.y = 0.4;
iensphere.rotation.z = Math.PI/180*345;
iensphere.position.set(-3.2, -9.5, 0.3);
ihsphere.add(iensphere);

var scircle = new THREE.SphereGeometry(0.35, 64, 32);
var iessphere = new THREE.Mesh(scircle, wwh);
iessphere.scale.y = 0.4;
iessphere.rotation.z = Math.PI/180*345;
iessphere.position.set(-3.05, -9.65, 0.65);
ihsphere.add(iessphere);

var iespheres = iesphere.clone();
iespheres.position.set(3,-9.3, 0.5);
iespheres.rotation.z = Math.PI/180*15;
ihsphere.add(iespheres);

var ienspheres = iensphere.clone();
ienspheres.rotation.z = Math.PI/180*15;
ienspheres.position.set(3.2, -9.5, 0.3);
ihsphere.add(ienspheres);

var iesspheres = iessphere.clone();
iesspheres.rotation.z = Math.PI/180*15;
iesspheres.position.set(3.05, -9.65, 0.65);
ihsphere.add(iesspheres);

var rectbox = new THREE.BoxGeometry(1.5, 0.5, 2);
var t5ba = new THREE.MeshLambertMaterial({color:0x52b8a0});
var ibrectaprism = new THREE.Mesh(rectbox, t5ba);
ibrectaprism.position.set(0, -3.9, 9);
ibrectaprism.rotation.x = Math.PI/180*10;
ihsphere.add(ibrectaprism);

var ibconl = new THREE.ConeGeometry(1.5, 4, 32);
var ibdconl = new THREE.Mesh(ibconl, t5ba);
ibdconl.rotation.z = -Math.PI/180*110;
ibdconl.scale.z = 0.2;
ibdconl.position.set(-2.6, -3.6, 9.7);
ibdconl.rotation.x = Math.PI/180*30;
ihsphere.add(ibdconl);

var ibconlS = new THREE.ConeGeometry(0.5, 4.7, 32);
ibuconl = new THREE.Mesh(ibconlS, t5ba);
ibuconl.rotation.z = -Math.PI/180*84;
ibuconl.scale.z = 0.2;
ibuconl.rotation.x = Math.PI/180*330;
ibuconl.position.set(-2.6, -4.4, 9.5);
ihsphere.add(ibuconl);

var ibcone = new THREE.ConeGeometry(0.5, 4.5, 32);
var ibconr = new THREE.ConeGeometry(0.5, 4.7, 32);
var ibdconr = new THREE.Mesh(ibcone, t5ba);
ibdconr.rotation.z = Math.PI/180*110;
ibdconr.scale.z = 0.2;
ibdconr.position.set(2.6, -3.6, 9.8);
ibdconr.rotation.x = Math.PI/180*40;
ihsphere.add(ibdconr);

var ibuconr = new THREE.Mesh(ibconr, t5ba);
ibuconr.scale.z = 0.2;
ibuconr.rotation.x = Math.PI/180*330;
ibuconr.position.set(2.6, -4, 9.75);
ibuconr.rotation.z = Math.PI/180*89;
ibuconr.rotation.y = Math.PI/180*347;
ihsphere.add(ibuconr);

var ibdconer = new THREE.Mesh(ibconr, t5ba);
ibdconer.scale.z = 0.2;
ibdconer.rotation.x = Math.PI/180*40;
ibdconer.rotation.z = Math.PI/180*93;
ibdconer.rotation.y = Math.PI/180*348;
ibdconer.position.set(2.6, -4.3, 9.7);
ihsphere.add(ibdconer);

var ibuconer = new THREE.Mesh(ibconr, t5ba);
ibuconer.scale.z = 0.2;
ibuconer.rotation.x = Math.PI/180*330;
ibuconer.rotation.z = Math.PI/180*71;
ibuconer.rotation.y = Math.PI/180*360;
ibuconer.position.set(2.6, -4.6, 9.7);
ihsphere.add(ibuconer);

var dot = new THREE.SphereGeometry(0.3, 64, 32);
var cf5 = new THREE.MeshLambertMaterial({color:0xcaff50});
var gdotld = new THREE.Mesh(dot, cf5);
gdotld.scale.z = 0.25;
gdotld.rotation.x = Math.PI/180*40;
gdotld.position.set(-2.6, -3.7, 9.8);
ihsphere.add(gdotld);

var gdotdl = new THREE.Mesh(dot, cf5);
gdotdl.scale.z = 0.25;
gdotdl.rotation.x = Math.PI/180*40;
gdotdl.position.set(-3.7, -2.8, 10.45);
ihsphere.add(gdotdl);

var f3a = new THREE.MeshLambertMaterial({color:0xff30ac});
var pdotld = new THREE.Mesh(dot, f3a);
pdotld.rotation.x = Math.PI/180*40;
pdotld.scale.z = 0.25;
pdotld.position.set(-3.9, -3.9, 9.75);
ihsphere.add(pdotld);

var gdotr = new THREE.Mesh(dot, cf5);
gdotr.scale.z = 0.25;
gdotr.rotation.y = Math.PI/180*340;
gdotr.rotation.x = Math.PI/180*330;
gdotr.position.set(4, -3.8, 10.1);
ihsphere.add(gdotr);

var sdot = new THREE.SphereGeometry(0.25, 64, 32);
var pdotr = new THREE.Mesh(sdot, f3a);
pdotr.scale.z = 0.25;
pdotr.rotation.x = Math.PI/180*330;
pdotr.position.set(3.2, -4.7, 9.8);
ihsphere.add(pdotr);

var ssdot = new THREE.SphereGeometry(0.15, 64, 32);
var pdotru = new THREE.Mesh(ssdot, f3a);
pdotru.scale.z = 0.25;
pdotru.rotation.x = Math.PI/180*40;
pdotru.position.set(3.4, -3.3, 10.15);
ihsphere.add(pdotru);

var aa = new THREE.SphereGeometry(1, 64, 32);
var bb = new THREE.MeshLambertMaterial({color:0x0000ff});
var cc = new THREE.Mesh(aa, bb);
cc.position.set(15, 0, 15);

var erctangle = new THREE.BoxGeometry(3,0.5,3);
var ercprisml = new THREE.Mesh(erctangle, lpink);
ercprisml.position.set(-6, -3.9, 8);
ercprisml.rotation.y = Math.PI/180*330;
ihsphere.add(ercprisml);

var eodot = new THREE.SphereGeometry(0.4, 64, 32);
var orange = new THREE.MeshLambertMaterial({color:0xffa920});
var edotlL = new THREE.Mesh(eodot, orange);
edotlL.scale.y = 0.2;
edotlL.position.set(-6, -4.2, 9);
ihsphere.add(edotlL);

var eodotm = new THREE.SphereGeometry(0.35, 64, 32);
var edotlm = new THREE.Mesh(eodotm, orange);
edotlm.scale.y = 0.2;
edotlm.position.set(-6.5, -4.2, 8.4);
ihsphere.add(edotlm);

var edots = new THREE.SphereGeometry(0.3, 64, 32);
var edotls = new THREE.Mesh(edots, orange);
edotls.scale.y = 0.2;
edotls.position.set(-6.6, -4.2, 7.7);
ihsphere.add(edotls);

var espherval = new THREE.Mesh(eodot,f3a);
espherval.scale.y = 0.2;
espherval.scale.z = 1.5;
espherval.rotation.y = Math.PI/180*300;
espherval.position.set(-5.8, -4.2, 7.8);
ihsphere.add(espherval);

var esphervall = new THREE.Mesh(eodot, f3a);
esphervall.scale.y = 0.2;
esphervall.scale.z = 1.5;
esphervall.position.set(-5.5, -4.2, 8);
ihsphere.add(esphervall);

var erctanglew = new THREE.BoxGeometry(2.0, 0.3, 2.7);
var ercprismwl = new THREE.Mesh(erctanglew, wwh);
ercprismwl.position.set(-6, -4.1, 8);
ercprismwl.rotation.y = Math.PI/180*330;
ihsphere.add(ercprismwl);

var etringle = new THREE.ConeGeometry(1.55, 3, 32);
var econl = new THREE.Mesh(etringle, lpink);
econl.rotation.y = Math.PI/180*340;
econl.rotation.z = Math.PI/180*207;
econl.rotation.x = Math.PI/180*50;
econl.scale.z = 0.25;
econl.position.set(-6.1, -4.9, 8.4);
ihsphere.add(econl);

ercprismr = ercprisml.clone();
ercprisml.rotation.y = Math.PI/180*30;
ercprisml.position.set(6, -3.9, 8);
ihsphere.add(ercprismr);

edotrL = edotlL.clone();
edotrL.position.set(6, -4.2, 9);
ihsphere.add(edotrL);

edotrm = edotlm.clone();
edotrm.position.set(6.5, -4.2, 8.4);
ihsphere.add(edotrm);

edotrs = edotls.clone();
edotrs.position.set(6.6, -4.2, 7.7);
ihsphere.add(edotrs);

var pinkish = new THREE.MeshLambertMaterial({color:0xff909f});
var esphervar = new THREE.Mesh(eodot, pinkish);
esphervar.scale.y = 0.2;
esphervar.scale.z = 1.5;
esphervar.position.set(5.8, -4.2, 7.8);
esphervar.rotation.y = Math.PI/180*60;
ihsphere.add(esphervar);

esphervarl = new THREE.Mesh(eodot, pinkish);
esphervarl.scale.y = 0.2;
esphervarl.scale.z = 1.5;
esphervarl.position.set(5.5, -4.2, 8);
ihsphere.add(esphervarl);

var ercprismwr = ercprismwl.clone();
ercprismwr.position.set(6, -4.1, 8);
ercprismwr.rotation.y = Math.PI/180*30;
ihsphere.add(ercprismwr);

var econr = econl.clone();
econr.rotation.z = Math.PI/180*153;
econr.rotation.y = Math.PI/180*20;
econr.rotation.x = Math.PI/180*50;
econr.position.set(6.1, -4.9, 8.4);
ihsphere.add(econr);

var elcpartl = new THREE.SphereGeometry(0.6, 64, 32, Math.PI, 0.3);
var elspiecelu = new THREE.Mesh(elcpartl, nbl);
elspiecelu.position.set(-3.5, -9.1, 2.2);
elspiecelu.scale.x = 0.4;
elspiecelu.rotation.x = Math.PI/180*80;
elspiecelu.rotation.z = Math.PI/180*40;
elspiecelu.rotation.y = Math.PI/180*330;
ihsphere.add(elspiecelu);

var elcpartm = new THREE.SphereGeometry(0.5, 64, 32, Math.PI, 0.3);
var elspiecelm = new THREE.Mesh(elcpartm, nbl);
elspiecelm.scale.x = 0.4;
elspiecelm.rotation.x = Math.PI/180*80;
elspiecelm.rotation.y = Math.PI/180*340;
elspiecelm.rotation.z = Math.PI/180*50;
elspiecelm.position.set(-3.7, -9.1, 2);
ihsphere.add(elspiecelm);

var elcpartS = new THREE.SphereGeometry(0.45, 64, 32, Math.PI, 0.3);
var elspieceld = new THREE.Mesh(elcpartS, nbl);
elspieceld.scale.x = 0.4;
elspieceld.rotation.x = Math.PI/180*80;
elspieceld.rotation.y = Math.PI/180*350;
elspieceld.rotation.z = Math.PI/180*50;
elspieceld.position.set(-3.8, -9.15, 1.6);
ihsphere.add(elspieceld);

var ebcpart = new THREE.SphereGeometry(0.6, 64, 32, Math.PI, 0.4);
var ebspieceL = new THREE.Mesh(ebcpart, nbl);
ebspieceL.scale.x = 0.5;
ebspieceL.rotation.x = Math.PI/180*80;
ebspieceL.rotation.z = Math.PI/180*120;
ebspieceL.rotation.y = Math.PI/180*345;
ebspieceL.position.set(-3.8, -8.55, 3.5);
ihsphere.add(ebspieceL);

var elspieceru = new THREE.Mesh(elcpartl, nbl);
elspieceru.position.set(3.5, -9.05, 2);
elspieceru.scale.x = 0.4;
elspieceru.rotation.x = Math.PI/180*80;
elspieceru.rotation.y = Math.PI/180*200;
elspieceru.rotation.z = Math.PI/180*40;
ihsphere.add(elspieceru);

var elspiecerm = new THREE.Mesh(elcpartl, nbl);
elspiecerm.scale.x = 0.4;
elspiecerm.rotation.x = Math.PI/180*80;
elspiecerm.rotation.y = Math.PI/180*190;
elspiecerm.rotation.z = Math.PI/180*50;
elspiecerm.position.set(3.6, -9.1, 1.7);
ihsphere.add(elspiecerm);

var elspiecerd = new THREE.Mesh(elcpartS, nbl);
elspiecerd.scale.x = 0.4;
elspiecerd.rotation.x = Math.PI/180*80;
elspiecerd.rotation.y = Math.PI/180*180;
elspiecerd.rotation.z = Math.PI/180*50;
elspiecerd.position.set(3.7, -9.15, 1.5);
ihsphere.add(elspiecerd);

var  ebspieceR = new THREE.Mesh(ebcpart, nbl);
ebspieceR.scale.x = 0.5;
ebspieceR.rotation.x = Math.PI/180*80;
ebspieceR.rotation.z = Math.PI/180*60;
ebspieceR.rotation.y = Math.PI/180*20;
ebspieceR.position.set(3.8, -8.6, 3.5);
ihsphere.add(ebspieceR);

var ltrapezoid = new THREE.CylinderGeometry(0.5, 1.7, 2.5, 32, 1);
var lfcylinder = new THREE.Mesh(ltrapezoid, lpink);
lfcylinder.rotation.z = Math.PI/180*300;
lfcylinder.rotation.x = Math.PI/180*30;
lfcylinder.position.set(-7, -7, -2);
ihsphere.add(lfcylinder);

var lovcircle = new THREE.SphereGeometry(1.7, 64, 32);
var lfwsphere = new THREE.Mesh(lovcircle, wwh);
lfwsphere.scale.y = 0.3;
lfwsphere.rotation.z = Math.PI/180*300;
lfwsphere.rotation.x = Math.PI/180*30;
lfwsphere.position.set(-8.2, -7.6, -2.3);
ihsphere.add(lfwsphere);

var rfcylinder = lfcylinder.clone();
rfcylinder.rotation.z = Math.PI/180*60;
rfcylinder.position.set(7, -7, -2);
ihsphere.add(rfcylinder);

var rfwsphere = lfwsphere.clone();
rfwsphere.rotation.z = Math.PI/180*60;
rfwsphere.position.set(8.2, -7.6, -2.3);
ihsphere.add(rfwsphere);

var lbcylinder = lfcylinder.clone();
lbcylinder.rotation.x = Math.PI/180*330;
lbcylinder.rotation.z = Math.PI/180*240;
lbcylinder.position.set(-7, 7, -2);
ihsphere.add(lbcylinder);

var lbwsphere = lfwsphere.clone();
lbwsphere.rotation.x = Math.PI/180*330;
lbwsphere.rotation.z = Math.PI/180*240;
lbwsphere.position.set(-8.2, 7.6, -2.3);
ihsphere.add(lbwsphere);

var rbcylinder = lbcylinder.clone();
rbcylinder.rotation.z = Math.PI/180*120;
rbcylinder.position.set(7, 7, -2);
ihsphere.add(rbcylinder);

var rbwsphere = lbwsphere.clone();
rbwsphere.rotation.z = Math.PI/180*120;
rbwsphere.position.set(8.2, 7.6, -2.3);
ihsphere.add(rbwsphere);

var trectangle = new THREE.BoxGeometry(2, 5, 0.03);
var ececec = new THREE.MeshPhongMaterial({color:0xececec, shininess:50});
var tagrctprism = new THREE.Mesh(trectangle, ececec);
tagrctprism.rotation.y = Math.PI/180*340;
tagrctprism.rotation.z = Math.PI/180*80;
tagrctprism.position.set(-10.5, 2, -2);
ihsphere.add(tagrctprism);

var lfdot = new THREE.Mesh(eodot, orange);
lfdot.scale.y = 0.3;
lfdot.rotation.z = Math.PI/180*300;
lfdot.rotation.x = Math.PI/180*20;
lfdot.position.set(-8.85, -7.5, -1.5);
ihsphere.add(lfdot);

var lfdotm = new THREE.Mesh(eodotm, orange);
lfdotm.scale.x = 0.3;
lfdotm.position.set(-9.03,-6.7, -2);
ihsphere.add(lfdotm);

var lfdots = new THREE.Mesh(edots, orange);
lfdots.scale.z = 0.3;
lfdots.position.set(-8.77, -7.1, -2.7);
lfdots.rotation.x=Math.PI/180*310;
lfdots.rotation.y=Math.PI/180*70;
lfdots.rotation.z=Math.PI/180*0;
ihsphere.add(lfdots);

var lfheart = new THREE.Mesh(eodot,f3a);
lfheart.position.set(-8.45, -7.9, -2.1);
lfheart.rotation.x = Math.PI/180*330;
lfheart.scale.z = 1.7;
lfheart.scale.x = 0.6;
lfheart.rotation.y = Math.PI/180*340;
ihsphere.add(lfheart);

var lfhearts = new THREE.Mesh(eodot, f3a);
lfhearts.rotation.x = Math.PI/180*30;
lfhearts.scale.z = 1.5;
lfhearts.scale.x = 0.6;
lfhearts.position.set(-8.3, -8.2,-2.1);
ihsphere.add(lfhearts); 

var rfdot = lfdot.clone();
rfdot.rotation.z = Math.PI/180*60;
rfdot.position.set(8.85, -7.5, -1.5);
ihsphere.add(rfdot);

var rfdotm = lfdotm.clone();
rfdotm.position.set(9.03, -6.7, -2);
ihsphere.add(rfdotm);

var rfdots = lfdots.clone()
rfdots.position.set(8.77, -7.1, -2.7);
rfdots.rotation.y = Math.PI/180*290;
ihsphere.add(rfdots);

var rfheart = lfheart.clone();
rfheart.position.set(8.45, -7.9, -2.1);
rfheart.rotation.y = Math.PI/180*20;
ihsphere.add(rfheart);

var rfhearts = lfhearts.clone();
rfhearts.position.set(8.3, -8.2, -2.1);
ihsphere.add(rfhearts);

var lbdot = rfdot.clone();
lbdot.rotation.x = Math.PI/180*340;
lbdot.position.set(-8.85, 7.5, -1.5);
ihsphere.add(lbdot);

var lbdotm = rfdotm.clone();
lbdotm.position.set(-9.03, 6.7, -2);
ihsphere.add(lbdotm);

var lbdots = rfdots.clone();
lbdots.position.set(-8.77, 7.1, -2.7);
lbdots.rotation.y = Math.PI/180*250;
lbdots.rotation.x = Math.PI/180*50;
ihsphere.add(lbdots);

var lbheart = rfheart.clone();
lbheart.position.set(-8.45, 7.9, -2.1);
lbheart.rotation.x = Math.PI/180*200;
ihsphere.add(lbheart);

var lbhearts = rfhearts.clone();
lbhearts.position.set(-8.3, 8.2, -2.1);
lbhearts.rotation.x = Math.PI/180*330;
ihsphere.add(lbhearts);

var rbdot = lbdot.clone();
rbdot.rotation.z = Math.PI/180*300;
rbdot.position.set(8.85, 7.5, -1.5);
ihsphere.add(rbdot);

var rbdotm = lfdotm.clone();
rbdotm.position.set(9.03, 6.7, -2);
ihsphere.add(rbdotm);

var rbdots = lfdots.clone();
rbdots.position.set(8.77, 7.1, -2.7);
rbdots.rotation.y = Math.PI/180*290;
rbdots.rotation.x = Math.PI/180*30;
ihsphere.add(rbdots);

var rbheart = lfheart.clone();
rbheart.position.set(8.45, 7.9, -2.1);
rbheart.rotation.x = Math.PI/180*200;
ihsphere.add(rbheart);

var rbhearts = rfhearts.clone();
rbhearts.position.set(8.3, 8.2, -2.1);
rbhearts.rotation.x = Math.PI/180*330;
ihsphere.add(rbhearts);

var tcirval = new THREE.SphereGeometry(0.7, 64, 32);
var tsphere = new THREE.Mesh(tcirval, lpink);
tsphere.scale.y = 1.5;
tsphere.position.set(0, 9.7, -0.5);
ihsphere.add(tsphere);

var trectangle = new THREE.BoxGeometry(0.5, 0.7, 0.5);
var trprism = new THREE.Mesh(trectangle, t5ba);
trprism.rotation.x = Math.PI/180*20;
trprism.position.set(0, 10.4, -0.3);
ihsphere.add(trprism);

var tsurot = new THREE.TorusGeometry(1, 0.4, 16, 100);
var ttorusl = new THREE.Mesh(tsurot, t5ba);
ttorusl.scale.z = 0.3;
ttorusl.scale.y = 0.2;
ttorusl.rotation.x = Math.PI/2;
ttorusl.rotation.y = Math.PI/180*20;
ttorusl.rotation.z = Math.PI/180*30;
ttorusl.position.set(0.9, 10.9, 0.3);
ihsphere.add(ttorusl);

var ttorusr = ttorusl.clone();
ttorusr.position.x = -0.9;
ttorusr.rotation.y = Math.PI/180*340;
ttorusr.rotation.z = Math.PI/180*330;
ihsphere.add(ttorusr);

var trctangle = new THREE.BoxGeometry(2, 0.1, 0.4);
var tprisml = new THREE.Mesh(trctangle, t5ba);
tprisml.rotation.z = Math.PI/180*30;
tprisml.rotation.y = Math.PI/180*10;
tprisml.rotation.x = Math.PI/180*330;
tprisml.position.set(0.7, 10.9, -0.5);
ihsphere.add(tprisml);

var tprismr = tprisml.clone();
tprismr.position.set(-0.7, 10.9, -0.5);
tprismr.rotation.y = Math.PI/180*350;
tprismr.rotation.z = Math.PI/180*330;
ihsphere.add(tprismr);

return ihsphere;
}