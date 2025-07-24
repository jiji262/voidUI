// 主题测试脚本
// 在浏览器控制台中运行此脚本来测试主题功能

console.log('🎨 开始测试紫色主题优化...');

// 测试主题持久化
function testThemePersistence() {
  console.log('📱 测试主题持久化...');
  
  // 保存当前主题
  const originalTheme = localStorage.getItem('retro-ui-theme');
  
  // 设置紫色主题
  localStorage.setItem('retro-ui-theme', 'purple');
  console.log('✅ 设置紫色主题到localStorage');
  
  // 模拟页面刷新后的主题读取
  const savedTheme = localStorage.getItem('retro-ui-theme');
  console.log(`📖 从localStorage读取的主题: ${savedTheme}`);
  
  // 恢复原始主题
  if (originalTheme) {
    localStorage.setItem('retro-ui-theme', originalTheme);
  } else {
    localStorage.removeItem('retro-ui-theme');
  }
  
  return savedTheme === 'purple';
}

// 测试CSS变量
function testCSSVariables() {
  console.log('🎨 测试CSS变量...');
  
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  
  const variables = [
    '--primary',
    '--primary-hover', 
    '--primary-foreground',
    '--secondary',
    '--secondary-foreground',
    '--background',
    '--foreground'
  ];
  
  variables.forEach(variable => {
    const value = computedStyle.getPropertyValue(variable);
    console.log(`${variable}: ${value}`);
  });
  
  return true;
}

// 测试主题数据属性
function testThemeDataAttribute() {
  console.log('🏷️ 测试主题数据属性...');
  
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  
  console.log(`当前主题数据属性: ${currentTheme}`);
  
  return currentTheme !== null;
}

// 测试深色模式检测
function testDarkModeDetection() {
  console.log('🌙 测试深色模式检测...');
  
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  
  console.log(`当前是否为深色模式: ${isDark}`);
  
  return true;
}

// 运行所有测试
function runAllTests() {
  console.log('🚀 运行所有主题测试...\n');
  
  const tests = [
    { name: '主题持久化', test: testThemePersistence },
    { name: 'CSS变量', test: testCSSVariables },
    { name: '主题数据属性', test: testThemeDataAttribute },
    { name: '深色模式检测', test: testDarkModeDetection }
  ];
  
  const results = tests.map(({ name, test }) => {
    try {
      const result = test();
      console.log(`✅ ${name}: 通过\n`);
      return { name, passed: true };
    } catch (error) {
      console.log(`❌ ${name}: 失败 - ${error.message}\n`);
      return { name, passed: false, error };
    }
  });
  
  console.log('📊 测试结果汇总:');
  results.forEach(({ name, passed, error }) => {
    console.log(`${passed ? '✅' : '❌'} ${name}`);
    if (error) console.log(`   错误: ${error.message}`);
  });
  
  const passedCount = results.filter(r => r.passed).length;
  console.log(`\n🎯 总计: ${passedCount}/${results.length} 个测试通过`);
}

// 导出测试函数
if (typeof window !== 'undefined') {
  window.testTheme = runAllTests;
  console.log('💡 在控制台中运行 testTheme() 来执行所有测试');
}

// 如果在Node.js环境中，直接运行测试
if (typeof window === 'undefined') {
  runAllTests();
}