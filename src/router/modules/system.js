import Layout from '@/components/VLayout/Index.vue'
const _import = require('../_import_' + process.env.NODE_ENV)
export default {
  path: '/system',
  component: Layout,
  children: [
    {
      path: 'admin/updatepwd',
      name: 'system_admin_updatepwd',
      component: _import('system/admin/updatepwd'),
      meta: {
        auth: true,
        title: '修改密码'
      }
    },
    {
      path: 'admin/config/setting',
      name: 'system_config_setting',
      component: _import('system/config/setting'),
      meta: {
        auth: true,
        title: '系统设置'
      }
    },
    {
      path: 'admin/list',
      name: 'system_admin_list',
      component: _import('system/admin/list'),
      meta: {
        auth: true,
        title: '管理员列表'
      }
    },
    {
      path: 'admin/create',
      name: 'system_admin_create',
      component: _import('system/admin/edit'),
      meta: {
        auth: true,
        title: '管理员创建',
        pname: 'system_admin_list'
      }
    },
    {
      path: 'admin/edit/:id',
      name: 'system_admin_edit',
      component: _import('system/admin/edit'),
      meta: {
        auth: true,
        title: '管理员编辑',
        pname: 'system_admin_list'
      }
    }
  ]
}
