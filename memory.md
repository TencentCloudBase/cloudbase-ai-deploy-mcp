

<add_aiide>
# CloudBase AI Toolkit - 新增 AI IDE 支持工作流

1. 创建 IDE 特定配置文件（如 `.mcp.json` 和 `CLAUDE.md`）
2. 更新 `scripts/fix-config-hardlinks.sh` 添加新目标文件到硬链接列表
3. 执行硬链接脚本确保规则文件同步
4. 创建 `doc/ide-setup/{ide-name}.md` 配置文档
5. 更新 `README.md`、`doc/index.md`、`doc/faq.md` 中的 AI IDE 支持列表
6. 验证硬链接状态和文档完整性
</add_aiide>
