//import { TweenRotation, TweenPosition, positionTo, rotationTo, ZPT, XPT, YPT, ZRT, XRT, YRT } from 'https://Javascript-CDNs.starmarine7123456789.repl.co/VictorsTween.js';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function TweenRotation(OBJ,X,Y,Z,T,TS,S) {
    const d = false
    OBJ.rotation.order = "YXZ"
    for (let step = 0; step < T; step++) {
      OBJ.rotation.x -= X
      OBJ.rotation.y -= Y
      OBJ.rotation.z -= Z
      if(step > T / 1.5 && d == false) {
        X /= S
        Y /= S
        Z /= S
        d = true
      }
      await delay(TS);
    }
  }
  
  async function TweenPosition(OBJ,X,Y,Z,T,TS,S) {
    const d = false
    OBJ.rotation.order = "YXZ"
    for (let step = 0; step < T; step++) {
      OBJ.position.x -= X
      OBJ.position.y -= Y
      OBJ.position.z -= Z
      if(step > T / 1.5 && d == false) {
        X /= S
        Y /= S
        Z /= S
        d = true
      }
      await delay(TS);
    }
  }
  
  function distanceVector( v1, v2 )
  {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;
  
    return Math.sqrt( dx * dx + dy * dy + dz * dz );
  }
  
  function YPT(OBJ,Y,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.position.y; step < Y; step++) {
        OBJ.position.y += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.position.y; step < Y; step++) {
        OBJ.position.y -= T
      }
    }
  }
  
  function ZPT(OBJ,Z,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.position.z; step < Z; step++) {
        OBJ.position.z += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.position.z; step < Z; step++) {
        OBJ.position.z -= T
      }
    }
  }
  
  function XPT(OBJ,X,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.position.x; step < X; step++) {
        OBJ.position.x += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.position.x; step < X; step++) {
        OBJ.position.x -= T
      }
    }
  }
  
  function YRT(OBJ,Y,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.rotation.y; step < Y; step++) {
        OBJ.rotation.y += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.rotation.y; step < Y; step++) {
        OBJ.rotation.y -= T
      }
    }
  }
  
  function ZRT(OBJ,Z,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.rotation.z; step < Z; step++) {
        OBJ.rotation.z += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.rotation.z; step < Z; step++) {
        OBJ.rotation.z -= T
      }
    }
  }
  
  function XRT(OBJ,X,T,R) {
    const d = false
    if(R == false) {
      for (let step = OBJ.rotation.x - 0; step < X; step++) {
        OBJ.rotation.x += T
      }
    } else if(R == true) {
      for (let step = 0 - OBJ.rotation.x; step < X; step++) {
        OBJ.rotation.x -= T
      }
    }
  }
  
  function positionTo(OBJ,X,Y,Z,T,R) {
    XPT(OBJ,X,T,R)
    ZPT(OBJ,Z,T,R)
    YPT(OBJ,Y,T,R)
  }
  
  function rotationTo(OBJ,X,Y,Z,T,R) {
    XRT(OBJ,X,T,R)
    ZRT(OBJ,Z,T,R)
    YRT(OBJ,Y,T,R)
  }
  
  export { TweenRotation, TweenPosition, positionTo, rotationTo, ZPT, XPT, YPT, ZRT, XRT, YRT };