function exchange (num) {
    if (num && typeof num == 'number') {
        // typeOf num == 'number' && 0<num and num<=10

        if (num > 0 && num <= 3) {
            if (num == 1) {
                result = '一';
            } else if (num == 2) {
                result = '二';
            } else if (num == 3) {
                result = '三';
            }

        } else if (num > 3) {
            result = "请输入不大于3的数字";
        } else {
            result = "请输入不小于0的数字";
        }
    } else if (num == 0) {
        result = '零';
    } else {
        result = '请输入数字';
    }
    console.log(result);
}
exchange(0);
exchange(5);
exchange(2);
exchange(null);
exchange('as');
exchange(-10);