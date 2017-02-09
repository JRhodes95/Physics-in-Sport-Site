    
function forceDrag(rho, v, C_D, area){
    
    var force = -0.5 * rho *v * 2 * 2 * C_D * area;
    return force ;
}

 function radians(degrees){
    var pi = Math.pi;
    var radians = degrees * (pi/180);
    
    return radians;
}

function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}


function simpleTrajectory(u, theta_deg){
    
    //define the value for the acceleration due to gravity
    var g = 9.81;
    var pi = Math.pi;
    
    theta_rad = Math.radians(theta_deg);
    
    u_x = u * Math.cos(theta_rad);
    u_y = u * Math.sin(theta_rad);
    
    t_end = (2 * u_y) / g;
    
    t = linspace(0, t_end, 30);
    
    var s_x = [];
    var s_y = [];
    
    s_x = u_x * t;
    s_y = u_y * t -0.5 *g * t *2*2
    
    return s_x, s_y;
    
    
    
}

$(document).ready(function(){
    var a = 1 + 2;
    console.log(a);
    
})






