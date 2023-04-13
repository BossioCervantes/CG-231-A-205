function vector(v){

    if (v.x !==0 && v.y ==0 && v.z ==0)
    {return true;} // Es paralelo entre Y y Z
   
    if (v.x ==0 && v.y !==0 && v.z ==0)
    {return true;} // Es paralelo entre X y Z
   
    if (v.x ==0 && v.y ==0 && v.z !==0)
    {return true;} // Es paralelo entre X y Y
   
   }