import React, { Component } from 'react';

// 高阶组件，用于创建错误边界
const withErrorBoundary = (WrappedComponent, onCatch) => {
  return class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      // 更新 state 以触发重新渲染
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      // 调用传入的错误处理函数
      if (onCatch) onCatch(error, errorInfo);
      // 也可以选择上报错误到服务器等操作
      console.error('Error in ErrorBoundary component:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // 渲染错误状态的 UI 或者降级的 UI
        return <h1>发生了错误：{this.state.error.message}</h1>;
      }

      // 渲染正常的 UI
      return <WrappedComponent {...this.props} />;
    }
  };
};

// 函数组件
const MyComponent = () => {
  // 假设这里有可能会抛出错误的操作
  const result = 1 / 0; // 故意除以零来模拟错误
  return <div>结果是 {result}</div>;
};

// 使用高阶组件包装 MyComponent，创建错误边界
const MyComponentWithBoundary = withErrorBoundary(MyComponent, (error, errorInfo) => {
  console.error('Caught an error:', error, errorInfo);
  // 这里可以执行额外的错误处理逻辑
});

export default MyComponentWithBoundary;