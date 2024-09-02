import transformTree from '../index';

describe('transformTree', () => {
  test('将扁平数组转换成树结构', () => {
    const data = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
      },
      {
        id: '0-1',
        name: 'js',
        pid: '0',
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
      },
      {
        id: '0-2-1',
        name: 'css3',
        pid: '0-2',
      },
    ];
    const tree = transformTree(data);
    const expectTree = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
        children: [
          {
            id: '0-1',
            name: 'js',
            pid: '0',
            children: [],
          },
          {
            id: '0-2',
            name: 'css',
            pid: '0',
            children: [
              {
                id: '0-2-1',
                name: 'css3',
                pid: '0-2',
                children: [],
              },
            ],
          },
        ],
      },
    ];
    expect(tree).toEqual(expectTree);
  });
  test('将无根节点的扁平数组转换成树结构', () => {
    const list = [
      {
        name: '主页',
        id: '1',
        parentId: '0',
      },
      {
        name: '学习天地',
        id: '2',
        parentId: '0',
      },
      {
        name: '前端',
        id: '3',
        parentId: '2',
      },
      {
        name: '后端',
        id: '4',
        parentId: '2',
      },
      {
        name: 'JavaScript',
        id: '5',
        parentId: '3',
      },
      {
        name: 'Vue',
        id: '6',
        parentId: '5',
      },
      {
        name: 'React',
        id: '7',
        parentId: '5',
      },
      {
        name: 'Node',
        id: '8',
        parentId: '4',
      },
      {
        name: 'Java',
        id: '9',
        parentId: '4',
      },
      {
        name: '关于我们',
        id: '10',
        parentId: '0',
      },
    ];
    const expectArr = [
      {
        name: '主页',
        id: '1',
        parentId: '0',
        children: [],
      },
      {
        name: '学习天地',
        id: '2',
        parentId: '0',
        children: [
          {
            name: '前端',
            id: '3',
            parentId: '2',
            children: [
              {
                name: 'JavaScript',
                id: '5',
                parentId: '3',
                children: [
                  {
                    name: 'Vue',
                    id: '6',
                    parentId: '5',
                    children: [],
                  },
                  {
                    name: 'React',
                    id: '7',
                    parentId: '5',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: '后端',
            id: '4',
            parentId: '2',
            children: [
              {
                name: 'Node',
                id: '8',
                parentId: '4',
                children: [],
              },
              {
                name: 'Java',
                id: '9',
                parentId: '4',
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: '关于我们',
        id: '10',
        parentId: '0',
        children: [],
      },
    ];
    const arr = transformTree(list, {
      keyField: 'id',
      childField: 'children',
      parentField: 'parentId',
    });
    expect(arr).toEqual(expectArr);
  });
});
