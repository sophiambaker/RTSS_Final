let myMesh;
let meshCone = [];
let t;
const total = 50;

function createEnvironment(scene) {
  console.log("Adding environment");

  
    const color =  	0xFFFFFF;  // white
    const near = 1;
    const far = 50;
    scene.fog = new THREE.Fog(color, near, far);
  
    const geometry = new THREE.ConeGeometry( 1, 4, 12 );
    const material = new THREE.MeshBasicMaterial( { color: 0, transparent: true, opacity: .5 } );

  // for(i = 0; i < total; i ++){
  // meshCone[i] = new THREE.Mesh( geometry, material );
  // t = i*10
  // meshCone[i].position.set(t/2,2,t/2);
  // }
  for(let j = 0; j < total; j ++){

  for(let i = 0; i < total; i ++){
    meshCone[i] = new THREE.Mesh( geometry, material );
    t = i*15
    meshCone[i].position.set(j*2.5,1.25,t/6);


  scene.add( meshCone[i]);
  }
}

// meshCone[51] = new THREE.Mesh( geometry, material );
// meshCone[51].position.set(100,2,100);
// scene.add( meshCone[51]);
for(let j = -.5; j < total; j ++){

  for(let i = 0; i < total; i ++){
    meshCone[i] = new THREE.Mesh( geometry, material );
    t = i*15
    meshCone[i].position.set(j*2.5,5,t/6);
    meshCone[i].rotateX( Math.PI);

  scene.add( meshCone[i]);
  }
}

for(let j = 0; j < total; j ++){

  for(let i = 1; i < total; i ++){
    meshCone[i] = new THREE.Mesh( geometry, material );
    t = i*-15
    meshCone[i].position.set(j*2.5 ,1.25,t/6);


  scene.add( meshCone[i]);
  }
}

for(let j = -.5; j < total; j ++){

  for(let i = 0; i < total; i ++){
    meshCone[i] = new THREE.Mesh( geometry, material );
    t = i*-15
    meshCone[i].position.set(j*2.5 ,5,t/6);
    meshCone[i].rotateX( Math.PI);

  scene.add( meshCone[i]);
  }
}
    

  //let texture = new THREE.TextureLoader().load("../assets/texture.png");
  //let myGeometry = new THREE.SphereGeometry(10, 12, 12);
  //let myMaterial = new THREE.MeshBasicMaterial({ map: texture });
  //myMesh = new THREE.Mesh(myGeometry, myMaterial);
  //myMesh.position.set(5, 2, 5);
  //scene.add(myMesh);

  var geo = new THREE.PlaneGeometry(2000, 2000);
  var mat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
  var plane = new THREE.Mesh(geo, mat);
  plane.rotateX( - Math.PI / 2);
  scene.add(plane);

  var geoB = new THREE.PlaneGeometry(2000, 2000);
  var matB = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
  var planeB = new THREE.Mesh(geoB, matB);
  planeB.position.set(6,6,6)
  planeB.rotateX( - Math.PI / 2);
  scene.add(planeB);


  // const coneB = new THREE.Mesh( geometry, material );
  // coneB.position.set(4,2,0);
  
  // const coneC = new THREE.Mesh( geometry, material );
  // coneC.position.set(8,2,0);

  // const coneD = new THREE.Mesh( geometry, material );
  // coneD.position.set(12,2,0);

  // const coneE = new THREE.Mesh( geometry, material );
  // coneE.position.set(-4,2,0);

  // const coneF = new THREE.Mesh( geometry, material );
  // coneF.position.set(-8,2,0);

  // const coneG = new THREE.Mesh( geometry, material );
  // coneG.position.set(-12,2,0);

  // const coneH = new THREE.Mesh( geometry, material );
  // coneH.position.set(2,2,-4);

  // const coneI = new THREE.Mesh( geometry, material );
  // coneI.position.set(0,2,-8);

  // const coneJ = new THREE.Mesh( geometry, material );
  // coneJ.position.set(2,2,-12);

  // const coneK = new THREE.Mesh( geometry, material );
  // coneK.position.set(2,2,4);

  // const coneL = new THREE.Mesh( geometry, material );
  // coneL.position.set(0,2,8);

  // const coneM = new THREE.Mesh( geometry, material );
  // coneM.position.set(2,2,12);

  // const coneN = new THREE.Mesh( geometry, material );
  // coneN.position.set(6,2,-4);
  
  // const coneO = new THREE.Mesh( geometry, material );
  // coneO.position.set(4,2,-8);
  
  // const coneP = new THREE.Mesh( geometry, material );
  // coneP.position.set(6,2,-12);
  
  // const coneQ = new THREE.Mesh( geometry, material );
  // coneQ.position.set(10,2,-4);

  // const coneR = new THREE.Mesh( geometry, material );
  // coneR.position.set(8,2,-8);

  // const coneS = new THREE.Mesh( geometry, material );
  // coneS.position.set(10,2,-12);

  // const coneT = new THREE.Mesh( geometry, material );
  // coneT.position.set(14,2,-4);

  // const coneU = new THREE.Mesh( geometry, material );
  // coneU.position.set(12,2,-8);

  // const coneV = new THREE.Mesh( geometry, material );
  // coneV.position.set(14,2,-12);

  // const coneW = new THREE.Mesh( geometry, material );
  // coneW.position.set(6,2,4);

  // const coneX = new THREE.Mesh( geometry, material );
  // coneX.position.set(10,2,4);

  // const coneY = new THREE.Mesh( geometry, material );
  // coneY.position.set(14 ,2,4);

  // const coneZ = new THREE.Mesh( geometry, material );
  // coneZ.position.set(-2 ,2,4);

  // const coneAA = new THREE.Mesh( geometry, material );
  // coneAA.position.set(-6 ,2,4);

  // const coneAB = new THREE.Mesh( geometry, material );
  // coneAB.position.set(-10 ,2,4);

  // const coneAC = new THREE.Mesh( geometry, material );
  // coneAC.position.set(-14 ,2,4);

  // const coneAD = new THREE.Mesh( geometry, material );
  // coneAD.position.set(-4 ,2,8);

  // const coneAE = new THREE.Mesh( geometry, material );
  // coneAE.position.set(-8 ,2,8);

  // const coneAF = new THREE.Mesh( geometry, material );
  // coneAF.position.set(-12 ,2,8);

  // const coneAG = new THREE.Mesh( geometry, material );
  // coneAG.position.set(4 ,2,8);

  // const coneAH = new THREE.Mesh( geometry, material );
  // coneAH.position.set(8 ,2,8);

  // const coneAI = new THREE.Mesh( geometry, material );
  // coneAI.position.set(12 ,2,8);

  // const coneAJ = new THREE.Mesh( geometry, material );
  // coneAJ.position.set(6,2,12);

  // const coneAK = new THREE.Mesh( geometry, material );
  // coneAK.position.set(10,2,12);

  // const coneAL = new THREE.Mesh( geometry, material );
  // coneAL.position.set(14,2,12);

  // const coneAM = new THREE.Mesh( geometry, material );
  // coneAM.position.set(-2,2,12);

  // const coneAN = new THREE.Mesh( geometry, material );
  // coneAN.position.set(-6,2,12);

  // const coneAO = new THREE.Mesh( geometry, material );
  // coneAO.position.set(-10,2,12);
  
  // const coneAP = new THREE.Mesh( geometry, material );
  // coneAP.position.set(-14,2,12);

  // const coneAQ = new THREE.Mesh( geometry, material );
  // coneAQ.position.set(-2,2,-4);

  // const coneAR = new THREE.Mesh( geometry, material );
  // coneAR.position.set(-6,2,-4);

  // const coneAS = new THREE.Mesh( geometry, material );
  // coneAS.position.set(-10,2,-4);

  // const coneAT = new THREE.Mesh( geometry, material );
  // coneAT.position.set(-14,2,-4);

  // const coneAU = new THREE.Mesh( geometry, material );
  // coneAU.position.set(-4,2,-8);

  // const coneAV = new THREE.Mesh( geometry, material );
  // coneAV.position.set(-8,2,-8);

  // const coneAW = new THREE.Mesh( geometry, material );
  // coneAW.position.set(-12,2,-8);

  // const coneAX = new THREE.Mesh( geometry, material );
  // coneAX.position.set(-2,2,-12);

  // const coneAY = new THREE.Mesh( geometry, material );
  // coneAY.position.set(-6,2,-12);

  // const coneAZ = new THREE.Mesh( geometry, material );
  // coneAZ.position.set(-10,2,-12);

  // const coneBA = new THREE.Mesh( geometry, material );
  // coneBA.position.set(-14,2,-12);

  // const coneBB = new THREE.Mesh( geometry, material );
  // coneBB.position.set(-16,2,-8);

  // const coneBC = new THREE.Mesh( geometry, material );
  // coneBC.position.set(-16,2,0);

  // const coneBD = new THREE.Mesh( geometry, material );
  // coneBD.position.set(-16,2,8);

  // const coneBE = new THREE.Mesh( geometry, material );
  // coneBE.position.set(16,2,-8);
  
  // const coneBF = new THREE.Mesh( geometry, material );
  // coneBF.position.set(16,2,0)

  // const coneBG = new THREE.Mesh( geometry, material );
  // coneBG.position.set(16,2,8)

  // const coneBH = new THREE.Mesh( geometry, material );
  // coneBH.position.set(12,5,10)
  // coneBH.rotateX( Math.PI);
  
  // const coneBI = new THREE.Mesh( geometry, material );
  // coneBI.position.set(8,5,10)
  // coneBI.rotateX( Math.PI);

  // const coneBJ = new THREE.Mesh( geometry, material );
  // coneBJ.position.set(4,5,10)
  // coneBJ.rotateX( Math.PI);

  // const coneBK = new THREE.Mesh( geometry, material );
  // coneBK.position.set(0,5,10)
  // coneBK.rotateX( Math.PI);

  // const coneBL = new THREE.Mesh( geometry, material );
  // coneBL.position.set(-4,5,10)
  // coneBL.rotateX( Math.PI);

  // const coneBM = new THREE.Mesh( geometry, material );
  // coneBM.position.set(-8,5,10)
  // coneBM.rotateX( Math.PI);

  // const coneBN = new THREE.Mesh( geometry, material );
  // coneBN.position.set(-12,5,10)
  // coneBN.rotateX( Math.PI);

  // const coneBO = new THREE.Mesh( geometry, material );
  // coneBO.position.set(-14,5,6)
  // coneBO.rotateX( Math.PI);

  // const coneBP = new THREE.Mesh( geometry, material );
  // coneBP.position.set(-10,5,6)
  // coneBP.rotateX( Math.PI);

  // const coneBQ = new THREE.Mesh( geometry, material );
  // coneBQ.position.set(-6,5,6)
  // coneBQ.rotateX( Math.PI);

  // const coneBR = new THREE.Mesh( geometry, material );
  // coneBR.position.set(-2,5,6)
  // coneBR.rotateX( Math.PI);

  // const coneBS = new THREE.Mesh( geometry, material );
  // coneBS.position.set(2,5,6)
  // coneBS.rotateX( Math.PI);

  // const coneBT = new THREE.Mesh( geometry, material );
  // coneBT.position.set(6,5,6)
  // coneBT.rotateX( Math.PI);

  // const coneBU = new THREE.Mesh( geometry, material );
  // coneBU.position.set(10,5,6)
  // coneBU.rotateX( Math.PI);

  // const coneBV = new THREE.Mesh( geometry, material );
  // coneBV.position.set(14,5,6)
  // coneBV.rotateX( Math.PI);

  // const coneBW = new THREE.Mesh( geometry, material );
  // coneBW.position.set(12,5,2)
  // coneBW.rotateX( Math.PI);

  // const coneBX = new THREE.Mesh( geometry, material );
  // coneBX.position.set(8,5,2)
  // coneBX.rotateX( Math.PI);

  // const coneBY = new THREE.Mesh( geometry, material );
  // coneBY.position.set(4,5,2)
  // coneBY.rotateX( Math.PI);

  // const coneBZ = new THREE.Mesh( geometry, material );
  // coneBZ.position.set(0,5,2)
  // coneBZ.rotateX( Math.PI);

  // const coneCA = new THREE.Mesh( geometry, material );
  // coneCA.position.set(-4,5,2)
  // coneCA.rotateX( Math.PI);

  // const coneCB = new THREE.Mesh( geometry, material );
  // coneCB.position.set(-8,5,2)
  // coneCB.rotateX( Math.PI);

  // const coneCC = new THREE.Mesh( geometry, material );
  // coneCC.position.set(-12,5,2)
  // coneCC.rotateX( Math.PI);

  // const coneCD = new THREE.Mesh( geometry, material );
  // coneCD.position.set(-14,5,-2)
  // coneCD.rotateX( Math.PI);

  // const coneCE = new THREE.Mesh( geometry, material );
  // coneCE.position.set(-10,5,-2)
  // coneCE.rotateX( Math.PI);

  // const coneCF = new THREE.Mesh( geometry, material );
  // coneCF.position.set(-6,5,-2)
  // coneCF.rotateX( Math.PI);

  // const coneCG = new THREE.Mesh( geometry, material );
  // coneCG.position.set(-2,5,-2)
  // coneCG.rotateX( Math.PI);

  // const coneCH = new THREE.Mesh( geometry, material );
  // coneCH.position.set(2,5,-2)
  // coneCH.rotateX( Math.PI);

  // const coneCI = new THREE.Mesh( geometry, material );
  // coneCI.position.set(6,5,-2)
  // coneCI.rotateX( Math.PI);
  
  // const coneCJ = new THREE.Mesh( geometry, material );
  // coneCJ.position.set(10,5,-2)
  // coneCJ.rotateX( Math.PI);

  // const coneCK = new THREE.Mesh( geometry, material );
  // coneCK.position.set(14,5,-2)
  // coneCK.rotateX( Math.PI);

  // const coneCL = new THREE.Mesh( geometry, material );
  // coneCL.position.set(12,5,-6)
  // coneCL.rotateX( Math.PI);

  // const coneCM = new THREE.Mesh( geometry, material );
  // coneCM.position.set(8,5,-6)
  // coneCM.rotateX( Math.PI);

  // const coneCN = new THREE.Mesh( geometry, material );
  // coneCN.position.set(4,5,-6)
  // coneCN.rotateX( Math.PI);

  // const coneCO = new THREE.Mesh( geometry, material );
  // coneCO.position.set(0,5,-6)
  // coneCO.rotateX( Math.PI);

  // const coneCP = new THREE.Mesh( geometry, material );
  // coneCP.position.set(-4,5,-6)
  // coneCP.rotateX( Math.PI);

  // const coneCQ = new THREE.Mesh( geometry, material );
  // coneCQ.position.set(-8,5,-6)
  // coneCQ.rotateX( Math.PI);

  // const coneCR = new THREE.Mesh( geometry, material );
  // coneCR.position.set(-12,5,-6)
  // coneCR.rotateX( Math.PI);

  // const coneCS = new THREE.Mesh( geometry, material );
  // coneCS.position.set(-14,5,-10)
  // coneCS.rotateX( Math.PI);

  // const coneCT = new THREE.Mesh( geometry, material );
  // coneCT.position.set(-10,5,-10)
  // coneCT.rotateX( Math.PI);

  // const coneCU = new THREE.Mesh( geometry, material );
  // coneCU.position.set(-6,5,-10)
  // coneCU.rotateX( Math.PI);

  // const coneCV = new THREE.Mesh( geometry, material );
  // coneCV.position.set(-2,5,-10)
  // coneCV.rotateX( Math.PI);

  // const coneCW = new THREE.Mesh( geometry, material );
  // coneCW.position.set(2,5,-10)
  // coneCW.rotateX( Math.PI);

  // const coneCX = new THREE.Mesh( geometry, material );
  // coneCX.position.set(6,5,-10)
  // coneCX.rotateX( Math.PI);

  // const coneCY = new THREE.Mesh( geometry, material );
  // coneCY.position.set(10,5,-10)
  // coneCY.rotateX( Math.PI);

  // const coneCZ = new THREE.Mesh( geometry, material );
  // coneCZ.position.set(14,5,-10)
  // coneCZ.rotateX( Math.PI);



  // const group = new THREE.Group();
  // group.add( coneA );
  // group.add( coneB );
  // group.add( coneC );
  // group.add( coneD );
  // group.add( coneE );
  // group.add( coneF );
  // group.add( coneG );
  // group.add( coneH );
  // group.add( coneI );
  // group.add( coneJ );
  // group.add( coneK );
  // group.add( coneL );
  // group.add( coneM );
  // group.add( coneN );
  // group.add( coneO );
  // group.add( coneP );
  // group.add( coneQ );
  // group.add( coneR );
  // group.add( coneS );
  // group.add( coneT );
  // group.add( coneU );
  // group.add( coneV );
  // group.add( coneW );
  // group.add( coneX );
  // group.add( coneY );
  // group.add( coneZ );
  // group.add( coneAA );
  // group.add( coneAB );
  // group.add( coneAC );
  // group.add( coneAD );
  // group.add( coneAE );
  // group.add( coneAF );
  // group.add( coneAG );
  // group.add( coneAH );
  // group.add( coneAI );
  // group.add( coneAJ );
  // group.add( coneAK );
  // group.add( coneAL );
  // group.add( coneAM );
  // group.add( coneAN );
  // group.add( coneAO );
  // group.add( coneAP );
  // group.add( coneAQ );
  // group.add( coneAR );
  // group.add( coneAS );
  // group.add( coneAT );
  // group.add( coneAU );
  // group.add( coneAV );
  // group.add( coneAW );
  // group.add( coneAX );
  // group.add( coneAY );
  // group.add( coneAZ );
  // group.add( coneBA );
  // group.add( coneBB );
  // group.add( coneBC );
  // group.add( coneBD );
  // group.add( coneBE );
  // group.add( coneBF );
  // group.add( coneBG );
  // group.add( coneBH );
  // group.add( coneBI );
  // group.add( coneBJ );
  // group.add( coneBK );
  // group.add( coneBL );
  // group.add( coneBM );
  // group.add( coneBN );
  // group.add( coneBO );
  // group.add( coneBP );
  // group.add( coneBQ );
  // group.add( coneBR );
  // group.add( coneBS );
  // group.add( coneBT );
  // group.add( coneBU );
  // group.add( coneBV );
  // group.add( coneBW );
  // group.add( coneBX );
  // group.add( coneBY )
  // group.add( coneBZ );
  // group.add( coneCA );
  // group.add( coneCB );
  // group.add( coneCC );
  // group.add( coneCD );
  // group.add( coneCE );
  // group.add( coneCF );
  // group.add( coneCG );
  // group.add( coneCH );
  // group.add( coneCI );
  // group.add( coneCJ );
  // group.add( coneCK );
  // group.add( coneCL );
  // group.add( coneCM );
  // group.add( coneCN );
  // group.add( coneCO );
  // group.add( coneCP );
  // group.add( coneCQ );
  // group.add( coneCR );
  // group.add( coneCS );
  // group.add( coneCT );
  // group.add( coneCU );
  // group.add( coneCV );
  // group.add( coneCW );
  // group.add( coneCX );
  // group.add( coneCY );
  // group.add( coneCZ );

  // scene.add( group );
}


function updateEnvironment(scene) {
  //myMesh.position.x += 0.01;
}

