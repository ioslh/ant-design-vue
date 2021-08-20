/* istanbul ignore file */

import { FunctionalComponent } from 'vue';
import type { DataNode, Key } from './interface';

export interface TreeNodeProps extends Omit<DataNode, 'children'> {
  value: Key;
}

/** This is a placeholder, not real render in dom */
const TreeNode: FunctionalComponent<TreeNodeProps> = () => null;
TreeNode.inheritAttrs = false;
TreeNode.displayName = 'ATreeSelectNode';
export default TreeNode;