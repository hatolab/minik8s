#!/bin/bash

echo "iptables清除开始"
chainList=$(iptables -S -t nat | grep -vE "^.* (PREROUTING|INPUT|OUTPUT|POSTROUTING|WEAVE|DOCKER|KUBE-POSTROUTING) .*"  | grep "KUBE-SVC\|KUBE-SERVICES\|KUBE-SEP" | awk '{print $2}' | tac )
allChain=$(iptables -S -t nat    | grep "KUBE-SVC\|KUBE-SEP" | awk '{print $2}' | tac )
for i in $allChain
do
    iptables -t nat -F $i
done

for i in $chainList
do
    iptables -t nat -X $i
done
echo "iptables清除完成"
