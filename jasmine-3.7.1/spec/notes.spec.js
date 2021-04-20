describe("notes module", function () {

  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });

  describe('adding a note', function() {

    it('should be able to add a new note', function () {
      expect(notes.add('test note')).toBe(true);
      expect(notes.add('test note2')).toBe(true);
      expect(notes.count()).toBe(7);
    });

    it('should ignore blank notes', function () {
      expect(notes.add('')).toBe(false);
      expect(notes.add(null)).toBe(false);
      expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function(){
      expect(notes.add('     ')).toBe(false);
      expect(notes.add('                   ')).toBe(false);
      expect(notes.add('       ')).toBe(false);
      expect(notes.add('  ')).toBe(false);
      expect(notes.add('')).toBe(false);
      expect(notes.count()).toBe(5);
    });
    it('should require a string parameter', function(){
      expect(notes.add([0,2,3,4])).toBe(false);
      expect(notes.add(15266)).toBe(false);
    });
  });

  describe('deleting a note', function() {
    it('should be able to delete the first index', function(){
      expect(notes.remove(0)).toBe(true);
      expect(notes.count()).toBe(4);
      expect(notes.remove(0)).toBe(true);
      expect(notes.count()).toBe(3);
    });
    it('should be able to delete the last index',function(){
      expect(notes.remove(notes.count()-1)).toBe(true);
      expect(notes.count()).toBe(4);
      expect(notes.remove(notes.count()-1)).toBe(true);
      expect(notes.count()).toBe(3);
    });
    it('should return false if index is out of range', function(){
      expect(notes.remove(notes.count())).toBe(false);
    });
    it('should return false if the parameter is missing', function(){
      expect(notes.remove(null)).toBe(false);
    });
  });
  describe('clear should clear all notes', function(){
    it('clear should make length to 0', function(){
      notes.clear();
      expect(notes.count()).toBe(0);
    });
  });
  describe('with find function you should be able to find notes', function(){
    it('find should not be case sensitive', function()
    {
      notes.clear();
      notes.add('hErE Is TExT wIth UPPer AnD LowER CASE LEtters');
      notes.add('hErE Is texT wIth UPPer AnD LowER CASE LEtters');
      notes.add('hErE Is TexT wIth UPPer AnD LowER CASE LEtters');
      notes.add('hErE Is text wIth UPPer AnD LowER CASE LEtters');
      notes.add('hErE Is TEXT wIth UPPer AnD LowER CASE LEtters');
      expect(notes.find('text').length).toBe(5);
    });
    it('find should find notes that match the search', function()
    {
      notes.clear();
      notes.add('hErE Is TExT wIth UPPer AnD LowER CASE LEtters');
      notes.add('HERE IS other NOte With Text CONTAINING searching parameter');
      notes.add('hErE Is TexT wIth UPPer AnD LowER CASE LEtters With Text containIng searching parameter');
      notes.add('With TEXT containIng searching PARAMETER hErE Is text wIth UPPer AnD LowER CASE LEtters');
      notes.add('hErE Is TEXT wIth UPPer AnD LowER CASE LEtters');
      expect(notes.find('With TEXT containIng searching PARAMETER').length).toBe(3);
    });
  });
});

/*
describe('notes module', function () {
  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });

  it('should be able to add a new note');
  it('should ignore blank notes');
  it('should ignore notes containing only whitespace');
  it('should require a string parameter');
  it("should be able to add a new note", function () {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
  });
  it("should ignore blank notes", function () {
    expect(notes.add('')).toBe(false);
    expect(notes.count()).toBe(5);
  });
  it('should ignore notes containing only whitespace', function() {
    expect(notes.add('   ')).toBe(false);
    expect(notes.count()).toBe(5);
    pending();
  });

  it('should require a string parameter', function() {
    expect(notes.add()).toBe(false);
    expect(notes.count()).toBe(5);
    pending();
  });
});
 */
