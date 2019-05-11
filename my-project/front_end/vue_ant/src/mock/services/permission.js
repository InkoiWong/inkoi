import Mock from 'mockjs2'
import { builder } from '../util'

const permissionsListPager = () => {
  return builder({
    data: [
      {
        id: 'marketing',
        name: '营销管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: null,
        parents: null,
        type: null,
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'member',
        name: '会员管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'menu',
        name: '菜单管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'import', 'get', 'update']
      },
      {
        id: 'order',
        name: '订单管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'permission',
        name: '权限管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get', 'update', 'delete']
      },
      {
        id: 'role',
        name: '角色管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get', 'update', 'delete']
      },
      {
        id: 'test',
        name: '测试权限',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get']
      },
      {
        id: 'user',
        name: '用户管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","describe":"新增","defaultCheck":false},{"action":"get","describe":"查询","defaultCheck":false}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get']
      }
    ],
    pageSize: 10,
    pageNo: 0,
    totalPage: 1,
    totalCount: 5
  })
}

const permissionListNoPager = () => {
  return builder([
    {
      id: 'marketing',
      name: '营销管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      sptDaTypes: null,
      optionalFields: null,
      parents: null,
      type: null,
      deleted: 0,
      actions: ['add', 'query', 'get', 'update', 'delete']
    },
    {
      id: 'member',
      name: '会员管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'query', 'get', 'update', 'delete']
    },
    {
      id: 'menu',
      name: '菜单管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'import', 'get', 'update']
    },
    {
      id: 'order',
      name: '订单管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'query', 'get', 'update', 'delete']
    },
    {
      id: 'permission',
      name: '权限管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'get', 'update', 'delete']
    },
    {
      id: 'role',
      name: '角色管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'get', 'update', 'delete']
    },
    {
      id: 'test',
      name: '测试权限',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'get']
    },
    {
      id: 'user',
      name: '用户管理',
      describe: null,
      status: 1,
      actionData:
        '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
      sptDaTypes: null,
      optionalFields: '[]',
      parents: null,
      type: 'default',
      deleted: 0,
      actions: ['add', 'get']
    }
  ])
}

Mock.mock(/\/permission\/listPager/, 'get', permissionsListPager)
Mock.mock(/\/permission\/listNoPager/, 'get', permissionListNoPager)
