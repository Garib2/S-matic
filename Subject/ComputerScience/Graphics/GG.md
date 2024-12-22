---
layout: content
title: Matrix
permalink: /info/CS/Numerical/G2.md/
---

## 0.1 매트릭스
#### 1. Transformation

scale_matrix = np.eye(4, dtype=np.float32)
- identity matrix

```python
scale_matrix = np.eye(4, dtype=np.float32)
scale_matrix[0, 0] = scale_x
scale_matrix[1, 1] = scale_y
scale_matrix[2, 2] = scale_z
```

- rotation matrix
 **오일러 각(Euler Angles)**
Yaw (요): y축을 기준으로 회전
Pitch (피치): x축을 기준으로 회전
Roll (롤): z축을 기준으로 회전

최종 회전 행렬은 Yaw, Pitch, Roll 순서로 곱하여 계산
```python
# Yaw
yaw_matrix = np.array([
    [cos_y, -sin_y, 0, 0],
    [sin_y, cos_y,  0, 0],
    [0,     0,      1, 0],
    [0,     0,      0, 1]
], dtype=np.float32)

# Pitch
pitch_matrix = np.array([
    [cos_p,  0, sin_p, 0],
    [0,      1, 0,     0],
    [-sin_p, 0, cos_p, 0],
    [0,      0, 0,     1]
], dtype=np.float32)

# Roll
roll_matrix = np.array([
    [1, 0,      0,     0],
    [0, cos_r, -sin_r, 0],
    [0, sin_r,  cos_r, 0],
    [0, 0,      0,     1]
], dtype=np.float32)
```

- 위치행렬

```python
translation_matrix = np.eye(4, dtype=np.float32)
translation_matrix[0:3, 3] = self.location
```
