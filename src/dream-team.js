module.exports = function createDreamTeam(members) {
  var teamName=[];
  var trimmed;
  if(members == null){return false;}
  for(var i=0; i<members.length; i++) {
    if(typeof members[i] === 'string' && members[i].trim() !==null){
      trimmed = members[i].trim()[0].toUpperCase();
      teamName.push(trimmed); 
    }
  }
    
  
  if(teamName.length>0){
    return teamName.sort().join("");
  } else {
    return false;
  }
};
