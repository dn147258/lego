import React from 'react';
import { Wrap, Table } from '../../components';

export const TableList = props => {
  const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8081';
  const apiPrefix = `//${host}/lego-api/`;
  const config = {
    base: { name: '列表管理', api: apiPrefix + 'table/list?name={{name}}&pn={{pageNo}}', path: 'data.list' },
    cols: [
      { key: 'id', name: 'ID', width: '100', fn: [] },
      { key: 'name', name: '列表名称', width: '300', fn: ['search'] },
      { key: 'desc', name: '备注', width: '', fn: [] },
    ],
    handles: [
      {
        key: 'preview',
        name: '预览',
        icon: 'eye',
        url: '/table/use/{{id}}',
        action: 'link',
      },
      {
        key: 'edit',
        name: '编辑',
        icon: 'edit',
        url: '/table/edit/{{id}}',
        action: 'link',
      },
      { key: 'delete', name: '删除', icon: 'trash-alt', url: apiPrefix + 'table/delete?id={{id}}', action: 'api' },
    ],
  };

  return (
    <Wrap>
      <div className='lego-card'>
        <div id='tableTopHook' className='table-top clearfix'>
          <h2 className='title'>{config.base.name}</h2>
          <div className='btns'>
            <button
              type='button'
              className='btn btn-primary btn-sm'
              onClick={() => props.history.push('/table/create')}>
              <i className='fas fa-plus' />
              <span>创建列表</span>
            </button>
          </div>
        </div>
        <Table config={config}></Table>
      </div>
    </Wrap>
  );
};
