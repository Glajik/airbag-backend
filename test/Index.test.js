/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import Index from '../src/importing/Index';

describe('test Index', () => {
  it('Should work', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Mike' },
    ];

    const nameIndex = new Index(data);
    expect(nameIndex.index).is.empty;

    expect(nameIndex.get('id', 2)).is.deep.equal({ id: 2, name: 'Andrew' });
    expect(nameIndex.index).has.ownProperty('id');

    const nameMap = nameIndex.getFor('name');
    expect(nameIndex.index).has.ownProperty('name');
    expect(nameIndex.index).has.ownProperty('id');
    expect(nameMap).is.deep.equal({
      John: { id: 1, name: 'John' },
      Andrew: { id: 2, name: 'Andrew' },
      Mike: { id: 3, name: 'Mike' },
    });
  });
});
