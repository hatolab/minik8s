#!/bin/bash

# 压力测试配置参数
TARGET_URL="http://10.32.0.2:8090/"  # 替换为你的Web容器地址
CONCURRENT_USERS=1000                          # 并发用户数
TOTAL_REQUESTS=100000000                          # 总请求数
TEST_TOOL="ab"                                # 可选工具: ab / wrk
LOG_FILE="stress_test.log"                    # 测试日志文件

# 检查依赖工具是否安装
check_dependencies() {
  case $TEST_TOOL in
    "ab")
      if ! command -v ab &> /dev/null; then
        echo "未找到 ab (Apache Bench)，请先安装:"
        echo "  Ubuntu/Debian: sudo apt-get install apache2-utils"
        echo "  CentOS/RHEL:   sudo yum install httpd-tools"
        exit 1
      fi
      ;;
    "wrk")
      if ! command -v wrk &> /dev/null; then
        echo "未找到 wrk，请先安装:"
        echo "  Ubuntu/Debian: sudo apt-get install wrk"
        echo "  MacOS:         brew install wrk"
        exit 1
      fi
      ;;
    *)
      echo "不支持的测试工具: $TEST_TOOL"
      exit 1
  esac
}

# 运行压力测试
run_test() {
  echo "开始压力测试..."
  echo "目标地址: $TARGET_URL"
  echo "并发用户: $CONCURRENT_USERS"
  echo "总请求数: $TOTAL_REQUESTS"
  echo "测试工具: $TEST_TOOL"
  echo "---------------------------------------"

  case $TEST_TOOL in
    "ab")
      ab -k -n $TOTAL_REQUESTS -c $CONCURRENT_USERS $TARGET_URL > $LOG_FILE
      ;;
    "wrk")
      wrk -t$CONCURRENT_USERS -c$CONCURRENT_USERS -d10s $TARGET_URL > $LOG_FILE
      ;;
  esac

  echo "测试完成！结果已保存到 $LOG_FILE"
}

# 解析并显示关键指标
analyze_results() {
  echo -e "\n关键指标分析:"
  echo "---------------------------------------"

  case $TEST_TOOL in
    "ab")
      grep "Requests per second" $LOG_FILE
      grep "Time per request" $LOG_FILE
      grep "Failed requests" $LOG_FILE
      grep "Total transferred" $LOG_FILE
      ;;
    "wrk")
      grep "Latency" $LOG_FILE
      grep "Req/Sec" $LOG_FILE
      grep "Requests/sec" $LOG_FILE
      grep "Transfer/sec" $LOG_FILE
      ;;
  esac
}

# 主函数流程
main() {
  check_dependencies
  run_test
  analyze_results
}

main
