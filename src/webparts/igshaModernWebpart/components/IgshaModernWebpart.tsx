import * as React from 'react';
import styles from './IgshaModernWebpart.module.scss';
import { IIgshaModernWebpartProps } from './IIgshaModernWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { WebPartContext } from '@microsoft/sp-webpart-base';

interface IProps {
  description: string;
  contrext: WebPartContext;
}

interface IState{
  employees: any
}
export default class IgshaModernWebpart extends React.Component<IIgshaModernWebpartProps,IState> {
  state = {
    employees: null
  }
  public async componentDidMount(){
 sp.setup({
    spfxContext: this.props.context
  });
//   const response = await sp.web.lists.getByTitle("Emploeeys").items.get();
// console.log(response);
// const items: any[] = await sp.web.lists.getByTitle('Departments').items.get();
// console.log(items);
console.log("Again problems!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
const items1: any[] = await sp.web.lists.getByTitle("Department").items.get();
console.log(items1);

  }
 
  public render(): React.ReactElement<IIgshaModernWebpartProps> {
    return (
      <div className={ styles.igshaModernWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>HI. Many problems </span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
