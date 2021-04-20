var notes = (function(){

  var notesArray = [];

  function Note(note){
    this.timestamp = Date.now();
    this.note = note;
    this.getNote = function(){
      return this.note;
    }
    this.getTimestamp = function(){
      return this.timestamp;
    }
  }

  return {
    add: function(note){
      console.log('add');
      if(/\S/.test(note) && note !== null && (typeof note === 'string' || note instanceof String)) {
        notesArray.push(new Note(note));
        console.log('Note '+note+' added.');
        return true;
      }
      return false;
    },
    remove: function(index){
      if(index === null)
        return false;
      console.log('remove');
      return notesArray.splice(index,1).length > 0;
    },
    count: function(){
      console.log('count');
      return notesArray.length;
    },
    list: function(){
      console.log('list');
      return notesArray;
    },
    find: function(string){
      console.log('find');
      //Katsotaan ettei haun muuttuja "string" ole tyhjä ja se on ilmentymä String muuttuja tyypistä
      if(string !== "" && string !== null && (typeof string === 'string' || string instanceof String)){
        var search = string.toLowerCase();
        var matches = [];
        for(var i = 0; i < notesArray.length; i++){
          var content = notesArray[i].getNote().toLowerCase();
          if(content.includes(search))
            matches.push(notesArray[i]);
        }
        if(matches.length < 1)
          return false;
        return matches;
      }
      return false;
    },
    clear: function(){
      console.log('clear');
      notesArray = [];
      /*
      notesArray.splice(0,notesArray.length);
       */
    }
  }
}());



/*
  function add(note){

    if(note !== "" && note !== null) {
      notesArray.push(new Note(note));
      console.log('Note '+note+' added.');
      return true;
    }
    return false;
  }

  function remove(index){
    return notesArray.splice(index,1).length > 0;
  }

  function count(){
    return notesArray.length;
  }

  function list(){
    return notesArray;
  }

  function find(string){
    //Katsotaan ettei haun muuttuja "string" ole tyhjä ja se on ilmentymä String muuttuja tyypistä
    if(string !== "" && string !== null && (typeof string === 'string' || string instanceof String)){
      var search = string.toLowerCase();
      var matches = [];
      for(var i = 0; i < notesArray.length; i++){
        var content = notesArray[i].getNote().toLowerCase();
        if(content.includes(search))
          matches.push(notesArray[i]);
      }
      if(matches.length < 1)
        return false;
      return matches;
    }
    return false;
  }

  function clear(){
    notesArray = [];
  }



 */
