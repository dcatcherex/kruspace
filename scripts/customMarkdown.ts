import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';


interface CustomMarkdownProps {
  children: string;
}

const CustomMarkdown: FC<CustomMarkdownProps> = ({ children }) => {
  const modifiedChildren = children.replace(/\[(.*?)\]/g, '**$1**');

  return <ReactMarkdown>{modifiedChildren}</ReactMarkdown>;
};

export default CustomMarkdown;